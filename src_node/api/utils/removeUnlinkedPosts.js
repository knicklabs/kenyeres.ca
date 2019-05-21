const { linkedPosts } = require('../../config')

module.exports = posts => 
  posts.filter(({ path, type }) => !!path && linkedPosts.includes(type))
