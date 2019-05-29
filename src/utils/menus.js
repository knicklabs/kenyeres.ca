export const getMenuBySlug = (menus, slug) => {
  const matches = menus.filter(({ slug: s }) => s === slug)
  return matches.length ? matches[0] : null
}

export const getMenuItemsBySlug = (menus, slug) => {
  const menu = getMenuBySlug(menus, slug)
  return menu ? menu.items : []
}
