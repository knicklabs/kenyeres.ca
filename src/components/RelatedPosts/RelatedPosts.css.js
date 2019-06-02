import { Link } from 'gatsby'
import styled from 'styled-components'

import { 
  borderRadius, 
  boxShadow, 
  colors, 
  fontFamily,
  fontSize,
  lineHeight,
  margin, 
  padding 
} from '../../theme'

export const RelatedPostsUI = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
`

export const RelatedPostUI = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const CardUI = styled.div`
  background-color: ${colors.white};
  border-radius: ${borderRadius.default};
  box-shadow: ${boxShadow.md};
  color: ${colors.gray['800']};
  margin-bottom: ${margin['5']};
  padding: ${padding['6']};
`

export const CardLinkUI = styled(Link)`
  box-shadow: 0 4px 0 ${colors.indigo['200']};
  color: ${colors.indigo['700']};
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.base};
  line-height: ${lineHeight.relaxed};
  text-decoration: none;
  transition: all 150ms ease-in;

  &:hover {
    box-shadow: 0 2px 0 ${colors.indigo['700']};
    color: ${colors.indigo['800']};
  }
`
