import { Link } from 'gatsby'
import styled from 'styled-components'

import { 
  borderRadius, 
  boxShadow, 
  colors, 
  fontFamily,
  fontSize,
  fontWeight,
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

export const CardTitleUI = styled.h2`
  color: ${colors.blue['800']};
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.normal};
  line-height: ${lineHeight.relaxed};
  margin: 0;
`

export const CardDescriptionUI = styled.div`
  color: ${colors.gray['800']};
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.sm};
  line-height: ${lineHeight.relaxed};

  a {
    box-shadow: 0 4px 0 ${colors.indigo['200']};
    color: ${colors.indigo['700']};
    text-decoration: none;
    transition: all 150ms ease-in;

    &:hover {
      box-shadow: 0 2px 0 ${colors.indigo['700']};
      color: ${colors.indigo['800']};
    }
  }
`

export const CardDetailUI = styled.span`
  color: ${colors.gray['600']};
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.sm};
  line-height: ${lineHeight.tight};
`

export const CardMetaUI = styled.div`
  display: flex;
`

export const CardMetaItemUI = styled.div`
  align-items: center;
  display: flex;
  margin-right: ${margin['3']};

  &:last-child {
    margin-right: 0;
  }

  a {
    box-shadow: 0 4px 0 ${colors.indigo['200']};
    color: ${colors.indigo['700']};
    text-decoration: none;
    transition: all 150ms ease-in;

    &:hover {
      box-shadow: 0 2px 0 ${colors.indigo['700']};
      color: ${colors.indigo['800']};
    }
  }
`
