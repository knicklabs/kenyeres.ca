const path = require('path')

const api = require('./src/api')

const TYPES = {
  OSS:  'oss',
  PAGE: 'page',
  POST: 'post',
  TALK: 'talks',
}
const DEFAULT_TYPE = TYPES.PAGE
const getPageTemplate = (type = DEFAULT_TYPE) => `src/templates/${type}Template.js`
const getRelatedPosts = ({ acf: { posts } } = { acf: { posts: [] } }) => 
  posts.map(({ wordpress_id: id }) => id)

const buildRelatedPosts = posts => posts.map(post => {
  if (post.type === TYPES.PAGE) {
    const relatedPosts = getRelatedPosts(post)
    post.acf.posts = posts.filter(({ wordpress_id: id }) => relatedPosts.includes(id))
  }
  return post
})

exports.createPages = ({ graphql, actions: { createPage } }) => 
  Promise.all(Object.keys(api).map(method => api[method](graphql)))
    .then((...postSets) => postSets.reduce((accumulator, postSet) => ([
      ...accumulator,
      ...postSet.reduce((accumulator, posts) => ([
        ...accumulator,
        ...posts,
      ]), []),
    ]), []))
    .then(posts => posts.filter(({ path }) => !!path))
    .then(posts => buildRelatedPosts(posts))
    .then(posts => posts.forEach(post => createPage({
      path: post.path,
      component: path.resolve(getPageTemplate(post.type)),
      context: {
        post,
      }
    })))
