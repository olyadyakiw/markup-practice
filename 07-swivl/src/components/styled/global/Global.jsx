import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *,
    &::before,
    &::after {
        box-sizing: border-box;   
    }

    body {
        font-family: 'Open Sans';
        font-size: 16px;
        background-color: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles