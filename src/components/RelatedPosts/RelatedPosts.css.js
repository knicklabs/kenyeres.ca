import styled from 'styled-components'

import { borderRadius, colors, margin, padding } from '../../theme'

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
  color: ${colors.gray['800']};
  margin-bottom: ${margin['3']};
  padding: ${padding['6']};
`
