import Helmet from 'react-helmet'
import React from 'react'

import { getMenuItemsBySlug } from '../utils'
import DefaultLayout from '../layouts/DefaultLayout'
import Page from '../components/Page'

export default props => {
  const { location: { href: currentUrl }, pageContext: { post, options } } = props
  const { description, menus, name, url } = options
  const { acf = { posts: [] }, content, date, featured_media, title, type } = post

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
      <Page 
        content={content} 
        date={date} 
        featured_media={featured_media} 
        posts={acf.posts} 
        title={title} 
        type={type} 
      />
    </DefaultLayout>
  )
}
