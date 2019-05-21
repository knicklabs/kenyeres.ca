const path = require('path')

const api = require('./src/api')

const TYPES = {
  OSS:  'oss',
  PAGE: 'page',
  POST: 'post',
  TALK: 'talks',
}
const DEFAULT_TYPE = TYPES.PAGE
const ARCHIVES = [TYPES.PAGE, TYPES.POST]

const cachedTemplates = {}
const getPageTemplate = (type = DEFAULT_TYPE) => {
  if (cachedTemplates[type]) {
    return cachedTemplates[type]
  }
  cachedTemplates[type] = path.resolve(`src/templates/${type}Template.js`)
  return cachedTemplates[type]
}

const getRelatedPosts = ({ acf: { posts } } = { acf: { posts: [] } }) => 
  posts.map(({ wordpress_id: id }) => id)

const getAllPosts = graphql => 
  Promise.all(Object.keys(api).map(method => api[method](graphql)))

const flattenPosts = (...postSets) => postSets.reduce((accumulator, postSet) => ([
  ...accumulator,
  ...postSet.reduce((accumulator, posts) => ([
    ...accumulator,
    ...posts,
  ]), []),
]), [])

const buildRelatedPosts = posts => posts.map(post => {
  if (post.type === TYPES.PAGE) {
    const relatedPosts = getRelatedPosts(post)
    post.acf.posts = posts.filter(({ wordpress_id: id }) => relatedPosts.includes(id)).map(p => ({
      ...p,
      path: ARCHIVES.includes(p.type) ? p.path : undefined,
    }))
  }
  return post
})

const removeUnlinkedPosts = posts => 
  posts.filter(({ path, type }) => !!path && ARCHIVES.includes(type))

const createPagesForPosts = (createPage, posts) =>
  posts.forEach(post => createPage({
    path: post.path,
    component: getPageTemplate(post.type),
    context: {
      post,
    },
  }))

exports.createPages = ({ graphql, actions: { createPage } }) =>
  getAllPosts(graphql)
    .then(flattenPosts)
    .then(buildRelatedPosts)
    .then(removeUnlinkedPosts)
    .then(createPagesForPosts.bind(this, createPage))
