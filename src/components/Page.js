import React from 'react'
import styled from 'styled-components'
import { fontFamily, fontSize, fontWeight, colors } from '../theme'

const HeadingUI = styled.h1`
  color: ${colors.teal[500]};
  font-family: ${fontFamily.sans};
  font-size: ${fontSize["2xl"]};
  font-weight: ${fontWeight.medium};
`

const MainUI = styled.main`
  font-family: ${fontFamily.sans};
`

export default React.memo(function Page({ content, title }) {
  return (
    <article>
      <header>
        <HeadingUI>{title}</HeadingUI>
      </header>
      <MainUI dangerouslySetInnerHTML={{__html: content }} />
    </article>
  )
})
