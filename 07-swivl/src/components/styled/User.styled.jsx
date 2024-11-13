import styled from "styled-components";

export const ArrowIcon = styled.svg`
    stroke: rgba(62, 64, 86, 0.4);
    fill: none;
    width: 16px;
    height: 16px;
    transition: all .4s;
`

export const UserStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    margin-left: auto;
    @media (max-width: 666px) {
        order: 2;
        margin-left: 0;
        gap: 8px;
    }
    &:hover {
        svg {
            stroke: ${({ theme }) => theme.colors.accent};
        }
    }
`

export const UserName = styled.span`
    letter-spacing: -0.5px;
    margin-right: 8px;
    @media (max-width: 666px) {
        display: none;
    }
`

export const UserAvatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`