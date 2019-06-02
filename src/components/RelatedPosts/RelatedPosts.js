import { Link } from 'gatsby'
import React from 'react'

import { CardUI, RelatedPostsUI, RelatedPostUI } from './RelatedPosts.css'
import { TYPES } from '../../constants'

const renderItem = post => post.title

const renderPost = post => (
  <Link to={post.path}>
    <CardUI>
      <Link to={post.path}>
        {post.title}
      </Link>
    </CardUI>
  </Link>
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
  console.log(posts)
  if (!posts.length) {
    return null
  }

  return (
    <RelatedPostsUI>
      {posts.map(post => renderRelatedPost(post))}
    </RelatedPostsUI>
  )
})
