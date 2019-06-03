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
  maxWidth, 
  padding,
} from '../../theme'

export const PageUI = styled.main`
  padding: ${padding[6]};
  text-align: center;
`

export const ArticleUI = styled.article`
  margin: 0 auto;
  max-width: ${maxWidth['6xl']};
`

export const BodyUI = styled.div`
  color: ${colors.gray['800']};
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.base};
  line-height: ${lineHeight.relaxed};
  text-align: left;

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.blue['800']};
    font-weight: ${fontWeight.medium};
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

  ol, ul {
    padding-left: ${padding['6']};
  }

  code {
    background-color: ${colors.gray['300']};
    border-radius: ${borderRadius.default};
    color: ${colors.gray['600']};
    display: inline-block;
    padding: 0 ${padding['2']};
  }

  pre {
    background-color: ${colors.gray['300']};
    border-radius: ${borderRadius.default};
    box-shadow: ${boxShadow.md};
    padding: ${padding['3']};

    code {
      background-color: transparent;
      border-radius: none;
      color: ${colors.gray['600']};
      font-family: ${fontFamily.mono};
      font-size: ${fontSize.xs};
      padding: 0;
    }
  }
`

export const DateUI = styled.div`
  color: ${colors.blue['700']};
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.light};
  margin-top: ${margin['2']};
`

export const HeaderUI = styled.header`
  border-bottom: 1px solid ${colors.gray['300']};
  box-shadow: 0 1px 0 ${colors.gray['100']};
  padding-bottom: ${padding[3]};
  text-align: left;
`

export const ImageUI = styled.div`
  background-color: ${colors.white};
  border: 0.75rem solid ${colors.white};
  border-radius: ${borderRadius.default};
  box-shadow: ${boxShadow.md};
  display: inline-block;
  vertical-align: middle;
`

export const ImageWrapperUI = styled.div`
  margin-left: ${margin['5']};
  margin-top: ${margin['4']};
  text-align: right;
`

export const TitleUI = styled.h1`
  color: ${colors.blue['800']};
  font-family: ${fontFamily.sans};
  font-size: ${fontSize['3xl']};
  font-weight: ${fontWeight.medium};
  line-height: ${lineHeight.snug};
  margin: 0;
`

export const WrapperUI = styled.div`
  display: flex;

  > div {
    width: 100%;
  }
`