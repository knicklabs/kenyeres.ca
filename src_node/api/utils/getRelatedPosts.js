module.exports = ({ acf: { posts } } = { acf: { posts: [] } }) => 
  posts.map(({ wordpress_id: id }) => id)
