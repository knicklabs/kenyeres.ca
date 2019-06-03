import styled from 'styled-components'
import {
  boxShadow,
  colors, 
  fontFamily, 
  fontSize, 
  fontWeight, 
  margin,
  maxWidth,
  padding,
} from '../../theme'

export const NavUI = styled.header`
  background: ${colors.indigo['800']};
  box-shadow: ${boxShadow.sm};
  padding: ${padding[6]};
  text-align: center;

  > nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${maxWidth['6xl']};
  }
`

export const BrandUI = styled.a`
  color: ${colors.white};
  display: inline-block;
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.medium};
  text-decoration: none;
`

export const MenuUI = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

export const MenuItemUI = styled.li`
  display: inline-block;
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.normal};
  margin: 0;
  margin-right: ${margin[6]};
  padding: 0;

  &:last-child {
    margin-right: 0;
  }

  > a {
    color: ${props => props.active ? colors.green['200'] : colors.indigo['200']};
    display: inline-block;
    text-decoration: none;
    transition: color 150ms ease-in;

    &:hover {
      color: ${props => props.active ? colors.green['200'] : colors.indigo['100']};
    }
  }
`
