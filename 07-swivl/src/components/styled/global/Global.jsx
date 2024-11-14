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
`

export default GlobalStyles