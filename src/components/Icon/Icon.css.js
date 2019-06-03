import styled from 'styled-components'

import { colors, fontSize, lineHeight, margin } from '../../theme'

export const IconUI = styled.span`
  color: ${colors.gray['500']};
  display: inline-block;
  font-size: ${fontSize.base};
  line-height: ${lineHeight.loose};

  svg {
    display: inline-block;
    fill: ${colors.gray['400']};
    height: ${fontSize.base};
    margin-right: ${margin['1']};
    overflow: hidden;
    vertical-align: middle;
    width: ${fontSize.base};
  }
`
