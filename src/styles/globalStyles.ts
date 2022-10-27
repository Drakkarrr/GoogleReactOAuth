import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  background-color: #046F2A;
  scroll-behavior: smooth;
}

h1, h2 {
  font-family: summernote;
}


a {
  padding: 1.2rem;
}

`