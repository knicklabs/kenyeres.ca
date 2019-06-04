import React from 'react'
import { BrandUI, MenuUI, MenuItemUI, NavUI,  ToggleButtonUI } from './NavBar.css'

const NavBar = React.memo(({ children }) => (
  <NavUI>
    <nav>
      {children}
    </nav>
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

class ToggleButton extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = (e) => {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    const { children } = this.props
    const { isOpen } = this.state
    return (
      <ToggleButtonUI onClick={this.toggle} isOpen={isOpen}>
        {children}
      </ToggleButtonUI>
    )
  }
}

NavBar.ToggleButton = ToggleButton

export default NavBar
