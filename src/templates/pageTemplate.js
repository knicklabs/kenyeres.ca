import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import React from 'react'

import { getMenuItemsBySlug } from '../utils'
import DefaultLayout from '../layouts/DefaultLayout'
import Page from '../components/Page'

export default ({ pageContext: { post, options } }) => {
  const { description, menus, name, url } = options
  const { acf = { posts: [] }, content, title } = post

  const links = getMenuItemsBySlug(menus, 'main-menu').map(item => ({
    ...item,
    href: item.url,
    url: undefined,
  }))

  return (
    <DefaultLayout links={links} title={name} url={url}>
      <Helmet>
        <title>{title} | {name}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Page content={content} title={title} />
      {acf.posts.map(p => (
        <div>
          {p.path ? <Link to={p.path}>{p.title}</Link> : p.title}
        </div>
      ))}
    </DefaultLayout>
  )
}
