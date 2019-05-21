module.exports = (...postSets) => postSets.reduce((accumulator, postSet) => ([
  ...accumulator,
  ...postSet.reduce((accumulator, posts) => ([
    ...accumulator,
    ...posts,
  ]), []),
]), [])
