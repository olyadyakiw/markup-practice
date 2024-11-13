import styled from "styled-components";

export const ActionsStyled = styled.div`
    display: flex;
    @media (max-width: 666px) {
        margin-left: auto;
    }
`

export const ActionIcon = styled.a`
    &:hover {
        svg {
            fill: ${( { theme } ) => theme.colors.accent}
        }
    }
    svg {
        width: 32px;
        height: 32px;
        fill: ${({ theme }) => theme.colors.text};
        transition: all .4s;
    }
`