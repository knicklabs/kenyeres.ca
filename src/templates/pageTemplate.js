import React from 'react'

import { getMenuItemsBySlug } from '../utils'
import DefaultLayout from '../layouts/DefaultLayout'
import Page from '../components/Page'
import SEO from '../components/seo'

export default props => {
  const { location: { href: currentUrl }, pageContext: { post, options } } = props
  const { menus, name, url } = options
  const { acf = { posts: [] }, content, date, featured_media, title, type, yoast_meta } = post

  return (
    <DefaultLayout 
      currentUrl={currentUrl}
      currentPostType={type}
      menuItems={getMenuItemsBySlug(menus, 'main-menu')} 
      title={name} 
      url={url}>
      <SEO {...yoast_meta} />
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
