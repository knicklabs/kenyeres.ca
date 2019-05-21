const { linkedPosts } = require('../../config')
const { TYPES } = require('../../constants')

const getRelatedPosts = ({ acf: { posts } } = { acf: { posts: [] } }) => 
  posts.map(({ wordpress_id: id }) => id)

/**
 * Replace each post in posts.
 * 
 * If the post is not a page, replace it with itself.
 *
 * If the post is a page, then replace it with a copy,
 * where each `id` in the `acf.posts` property on the post
 * is replaced with the full `post`.
 * @param  {Array} posts
 * @return {Array}
 */
module.exports = posts => posts.map(post => {
  if (post.type === TYPES.PAGE) {
    const relatedPosts = getRelatedPosts(post)
    post.acf.posts = posts.filter(({ wordpress_id: id }) => relatedPosts.includes(id)).map(p => ({
      ...p,
      path: linkedPosts.includes(p.type) ? p.path : undefined,
    }))
  }
  return post
})
