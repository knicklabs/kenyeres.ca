import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import React from 'react'

import Page from '../components/Page'

export default ({ pageContext: { post } } = { post: {} }) => (
  <div>
    <Helmet>
      <title>{post.title}</title>
    </Helmet>
    <Page content={post.content} title={post.title} />
    {post.acf.posts.map(p => (
      <div>
        {p.path ? <Link to={p.path}>{p.title}</Link> : p.title}
      </div>
    ))}
  </div>
)
