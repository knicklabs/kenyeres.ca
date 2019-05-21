/**
 * Flatten a set of a set of a set of posts into a single array.
 * @param  {...Array}
 * @return {Array}
 */
module.exports = (...postSets) => postSets.reduce((accumulator, postSet) => ([
  ...accumulator,
  ...postSet.reduce((accumulator, posts) => ([
    ...accumulator,
    ...posts,
  ]), []),
]), [])
