import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import React from 'react'

import { getMenuItemsBySlug } from '../utils'
import DefaultLayout from '../layouts/DefaultLayout'
import Page from '../components/Page'

export default props => {
  const { location: { href: currentUrl }, pageContext: { post, options } } = props
  const { description, menus, name, url } = options
  const { acf = { posts: [] }, content, date, title, type } = post

  return (
    <DefaultLayout 
      currentUrl={currentUrl}
      currentPostType={type}
      menuItems={getMenuItemsBySlug(menus, 'main-menu')} 
      title={name} 
      url={url}>
      <Helmet>
        <title>{title} | {name}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Page content={content} date={date} title={title} type={type} />
      {acf.posts.map(p => (
        <div>
          {p.path ? <Link to={p.path}>{p.title}</Link> : p.title}
        </div>
      ))}
    </DefaultLayout>
  )
}
