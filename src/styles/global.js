import { createGlobalStyle } from 'styled-components'
import BadassMoon from '../assets/fonts/badass_moon/BadassMoon.ttf'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: badas_moon;
  src: url(${BadassMoon});
}
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
    text-rendering:optimizeLegibility !important;
    -webkit-font-smoothing:antialiased !important;
  }

`
export default GlobalStyle
