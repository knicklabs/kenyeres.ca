import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import React from 'react'

import { getMenuItemsBySlug } from '../utils'
import Page from '../components/Page'

export default ({ pageContext: { post, siteInfo } } = { post: {}, siteInfo: {} }) => (
  <div>
    <Helmet>
      <title>{post.title} | {siteInfo.name}</title>
      <meta name="description" content={siteInfo.description} />
    </Helmet>
    <ul>
      {getMenuItemsBySlug(siteInfo.menus, 'main-menu').map(item => (
        <li>
          <a href={item.url} target={item.target} className={item.classes}>{item.title}</a>
        </li>
      ))}
    </ul>
    <Page content={post.content} title={post.title} />
    {post.acf.posts.map(p => (
      <div>
        {p.path ? <Link to={p.path}>{p.title}</Link> : p.title}
      </div>
    ))}
  </div>
)
