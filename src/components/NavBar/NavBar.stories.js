import React from 'react'

import { storiesOf } from '@storybook/react'

import NavBar from './NavBar'

storiesOf('NavBar', module).add('default', () => (
  <NavBar>
    <NavBar.Brand href="/">Nickolas Kenyeres</NavBar.Brand>
    <NavBar.Menu>
      <NavBar.MenuItem active href="/">About</NavBar.MenuItem>
      <NavBar.MenuItem href="/">Writing</NavBar.MenuItem>
      <NavBar.MenuItem href="/">Talks</NavBar.MenuItem>
      <NavBar.MenuItem href="/">Open Source</NavBar.MenuItem>
    </NavBar.Menu>
  </NavBar>
))
