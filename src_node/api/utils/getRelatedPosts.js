/**
 * Get the IDs of related posts.
 * @param  {Object} post
 * @param  {Object} post.acf
 * @param  {Array}  post.acf.posts
 * @return {Array}
 */
module.exports = ({ acf: { posts } } = { acf: { posts: [] } }) => 
  posts.map(({ wordpress_id: id }) => id)
