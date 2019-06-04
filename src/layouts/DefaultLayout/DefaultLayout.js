import React from 'react'

import DefaultLayoutUI, {GlobalStyle} from './DefaultLayout.css'
import NavBar from '../../components/NavBar'
import { isActive } from '../../utils'

export default React.memo(({ children, currentPostType, currentUrl, title, url = '#', menuItems = [] }) => (
  <DefaultLayoutUI>
    <NavBar>
      <NavBar.Brand href={url}>{title}</NavBar.Brand>
      <NavBar.ToggleButton>Menu</NavBar.ToggleButton>
      <NavBar.Menu>
        {menuItems.map(({ title, url, wordpress_id, ...rest }) => (
          <NavBar.MenuItem 
            active={isActive(url, currentUrl, currentPostType)}
            href={url} 
            key={wordpress_id}
            {...rest}
          >
            {title}
          </NavBar.MenuItem>
        ))}
      </NavBar.Menu>
    </NavBar>
    {children}
    <GlobalStyle />
  </DefaultLayoutUI>
))
