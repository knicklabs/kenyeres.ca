import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import React from 'react'

import Button from '../components/Button'

export default ({ pageContext: { post } } = { post: {} }) => (
  <div>
    <Helmet>
      <title>{post.title}</title>
    </Helmet>
    <Button>Hello</Button>
    <h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{__html: post.content}} />
    {post.acf.posts.map(p => (
      <div>
        {p.path ? <Link to={p.path}>{p.title}</Link> : p.title}
      </div>
    ))}
  </div>
)
