import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *,
    &::before,
    &::after {
        box-sizing: border-box;   
    }

    body {
        font-family: ${({ theme }) => theme.fonts.base};
        font-size: ${({ theme }) => theme.fontSizes.base};
        background-color: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
        margin: 0;
        padding: 0;
    }
    ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5 ,h6 {
        margin: 0;
    }
    a {
        color: inherit;
    }
    img {
        max-width: 100%;
    }
`

export default GlobalStyles