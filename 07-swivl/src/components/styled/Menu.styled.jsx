import styled from "styled-components"

export const MenuWrapper = styled.div`
    margin-left: auto;
    @media (max-width: 1025px) {
        align-self: flex-start;
        margin-top: 1rem;
    }
`

export const MenuButton = styled.button`
    border: none;
    background-color: transparent;
    margin-top: 0.25rem;
    cursor: pointer;
    svg {
        width: 16px;
        height: 16px;
        fill: ${ ({ theme }) => theme.colors.text };
        transition: fill .4s;
    }
    &:hover {
        svg {
            fill: ${ ({ theme }) => theme.colors.accent };
        }
    }
`

export const MenuList = styled.ul`
    list-style: none;
    position: absolute;
    right: 0;
    transform: translateX(85%);
    top: 1.5rem;
    max-width: 12rem;
    width: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(11px);
    padding: 1.5rem 0;

    @media (max-width: 668px) {
        transform: translate(0);
        top: 2rem;
    }
`

export const MenuItem = styled.li`
    transition: all .4s;
    &:hover {
        background: rgba(236, 241, 248, 0.6);
        backdrop-filter: blur(27.182817459106445px);
    }
`

export const MenuLink = styled.a`
    color: inherit;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;
    text-decoration: none;
    padding: 0.5rem 1.5rem;

    svg {
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.colors.text};
    }
`