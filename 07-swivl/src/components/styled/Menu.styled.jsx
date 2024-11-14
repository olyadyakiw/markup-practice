import styled from "styled-components"

export const MenuWrapper = styled.div`
    margin-left: auto;
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
    right: calc(-50% + 5px);
    top: 1.75rem;
    max-width: 12rem;
    width: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(11px);
    padding: 1.5rem 0;
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