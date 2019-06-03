import { SLUGS, TYPES } from '../constants'

export const getMenuBySlug = (menus, slug) => {
  const matches = menus.filter(({ slug: s }) => s === slug)
  return matches.length ? matches[0] : null
}

export const getMenuItemsBySlug = (menus, slug) => {
  const menu = getMenuBySlug(menus, slug)
  return menu ? menu.items : []
}

export const isActive = (href, currentUrl = '', currentPostType) => {
  const trimmedHref = href.replace(/\/$/, '')
  const trimmedCurrentUrl = currentUrl.replace(/\/$/, '')

  return trimmedHref === trimmedCurrentUrl || (
    currentPostType === TYPES.POST && 
    trimmedHref.indexOf(SLUGS.BLOG) === trimmedHref.length - SLUGS.BLOG.length
  )
}
