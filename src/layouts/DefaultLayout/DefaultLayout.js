import React from 'react'

import DefaultLayoutUI, {GlobalStyle} from './DefaultLayout.css'
import NavBar from '../../components/NavBar'

export default React.memo(({ children, title, url = '#', links = [] }) => (
  <DefaultLayoutUI>
    <header>
      <NavBar>
        <NavBar.Brand href={url}>{title}</NavBar.Brand>
        <NavBar.Menu>
          {links.map(({ title, ...rest }) => (
            <NavBar.MenuItem {...rest}>{title}</NavBar.MenuItem>
          ))}
        </NavBar.Menu>
      </NavBar>
    </header>
    <main>
      {children}
    </main>
    <GlobalStyle />
  </DefaultLayoutUI>
))
