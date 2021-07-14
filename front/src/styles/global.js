import {createGlobalStyle} from 'styled-components'
import Background from '../assets/background.jpg'

export const GlobalStyle = createGlobalStyle`

  :root {
    --footer: #232323
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 10px;
    /* background: url(${Background}) no-repeat center fixed;
    background-size: cover; */
  }

`;