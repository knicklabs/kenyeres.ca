import styled, { createGlobalStyle } from 'styled-components'

import { colors } from '../../theme'

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${colors.gray[200]};
  }
  body {
    line-height: 1;
    margin: 0;
    padding: 0;
  }
`

export default styled.div`
  background-color: ${colors.gray[200]};
  min-height: 100vh;
`
