const path = require('path')
const { defaultType } = require('../config')

// We do not want to load a template every time this
// function is invoked, so we will use this variable
// to cache templates that we have already loaded.
const cache = {}

const getPageTemplate = (type = defaultType) => {
  if (cache[type]) {
    return cache[type]
  }
  cache[type] = path.resolve(`src/templates/${type}Template.js`)
  return cache[type]
}

module.exports = (createPage, posts) =>
  posts.forEach(post => createPage({
    path: post.path,
    component: getPageTemplate(post.type),
    context: {
      post,
    },
  }))