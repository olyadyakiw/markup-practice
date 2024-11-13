import styled from "styled-components";

export const HeaderStyled = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.06);
    min-height: 112px;
    @media(max-width: 1024px) {
        min-height: 90px;
    }
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
`

export const Logo = styled.img`
    width: 50px;
`