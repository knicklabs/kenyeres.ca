const { linkedPosts } = require('../../config')

/**
 * Remove posts without a path and posts that are not
 * of a type that we want to create links for.
 * @param  {Array}
 * @return {Array}
 */
module.exports = posts => 
  posts.filter(({ path, type }) => !!path && linkedPosts.includes(type))
