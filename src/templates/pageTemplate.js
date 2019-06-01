import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import React from 'react'

import { getMenuItemsBySlug } from '../utils'
import DefaultLayout from '../layouts/DefaultLayout'
import Page from '../components/Page'

export default ({ pageContext: { post, siteInfo } } = { post: {}, siteInfo: {} }) => {
  const links = getMenuItemsBySlug(siteInfo.menus, 'main-menu').map(item => ({
    ...item,
    href: item.url,
    url: undefined,
  }))

  return (
    <DefaultLayout links={links} title={siteInfo.name} url={siteInfo.url}>
      <Helmet>
        <title>{post.title} | {siteInfo.name}</title>
        <meta name="description" content={siteInfo.description} />
      </Helmet>
      <Page content={post.content} title={post.title} />
      {post.acf.posts.map(p => (
        <div>
          {p.path ? <Link to={p.path}>{p.title}</Link> : p.title}
        </div>
      ))}
    </DefaultLayout>
  )
}
