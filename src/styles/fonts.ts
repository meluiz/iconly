import { css } from 'styled-components'

import CircularFont from 'fonts/circular-bold.otf'

export const FontFaces = css`
  @font-face {
    font-family: 'Circular';
    src: url(${CircularFont}) format('opentype');
    font-weight: 800;
    font-style: normal;
  }
`
