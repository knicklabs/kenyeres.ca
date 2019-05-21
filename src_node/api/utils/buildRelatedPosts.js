const { linkedPosts } = require('../../config')
const { TYPES } = require('../../constants')

const getRelatedPosts = ({ acf: { posts } } = { acf: { posts: [] } }) => 
  posts.map(({ wordpress_id: id }) => id)

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
