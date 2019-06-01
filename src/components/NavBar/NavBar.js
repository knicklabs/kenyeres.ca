import React from 'react'
import { BrandUI, MenuUI, MenuItemUI, NavUI } from './NavBar.css'

const NavBar = React.memo(({ children }) => (
  <NavUI>
    <div>
      {children}
    </div>
  </NavUI>
))

NavBar.Brand = React.memo(({ children, href = '#' }) => (
  <BrandUI href={href}>{children}</BrandUI>
))

NavBar.Menu = React.memo(({ children }) => <MenuUI>{children}</MenuUI>)

NavBar.MenuItem = React.memo(({ 
  active,
  children, 
  classes, 
  href = '#', 
  target, 
  ...rest 
}) => (
  <MenuItemUI active={active}>
    <a className={classes} href={href} target={target} {...rest}>
      {children}
    </a>
  </MenuItemUI>
))

export default NavBar
