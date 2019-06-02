import { Link } from 'gatsby'
import React from 'react'

import { CardUI, CardLinkUI, RelatedPostsUI, RelatedPostUI } from './RelatedPosts.css'
import { TYPES } from '../../constants'

const renderItem = post => post.title

const renderPost = post => (
  <CardUI>
    <CardLinkUI to={post.path}>
      {post.title}
    </CardLinkUI>
  </CardUI>
)

const renderRelatedPost = post => {
  let result
  switch (post.type) {
    case TYPES.POST:
      result = renderPost(post)
      break
    default:
      result = renderItem(post)
      break
  }
  return <RelatedPostUI key={post.wordpress_id}>{result}</RelatedPostUI>
}

export default React.memo(({posts = []}) => {
  if (!posts.length) {
    return null
  }

  return (
    <RelatedPostsUI>
      {posts.map(post => renderRelatedPost(post))}
    </RelatedPostsUI>
  )
})
