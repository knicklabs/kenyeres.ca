import styled from 'styled-components'
import {
  borderRadius,
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
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${maxWidth['6xl']};
    position: relative;
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

  @media screen and (max-width: ${maxWidth.xl}) {
    width: 100%;
  }
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

  @media screen and (max-width: ${maxWidth.xl}) {
    display: block;
    margin-right: 0;
    text-align: left;

    &:first-child {
      a {
        padding-top: ${padding['5']};
      }
    }

    &:last-child {
      a {
        padding-bottom: 0;
      }
    }

    a {
      display: block;
      padding: ${padding['2']} 0;
    }
  }
`

export const ToggleButtonUI = styled.button`
  background-color: transparent;
  border: ${props => props.isOpen ? `1px solid ${colors.indigo['200']}` : `1px solid ${colors.white}`};
  border-radius: ${borderRadius.default};
  color: ${props => props.isOpen ? colors.indigo['200'] : colors.white};
  display: none;
  padding: ${padding['1']} ${padding['2']};

  @media screen and (max-width: ${maxWidth.xl}) {
    display: inline-block;

    & + ul {
      display: ${props => props.isOpen ? 'block' : 'none'};
    }
  }
`