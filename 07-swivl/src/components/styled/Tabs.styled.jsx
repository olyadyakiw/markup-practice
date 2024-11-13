import styled, { css } from "styled-components";

export const TabsStyled = styled.ul`
    display: flex;
    gap: 37px;
    list-style: none;
    padding-left: 0;
    margin: 0;
    @media (max-width: 666px) {
        gap: 25px;
    }
`

export const TabsItem = styled.li``

export const TabsLink = styled.a`
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1;
    opacity: 0.6;
    padding-bottom: 19px;
    position: relative;
    transition: opacity .4s;
    &:hover {
        opacity: 1;
    }
    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 4px;
        background: transparent;
        left: 0;
        bottom: 0;
    }
    ${({ $active }) => $active &&
    css`
        opacity: 1;
        &:before {
            width: 100%;
            background: linear-gradient(135deg, #FF974F 0%, #E32C75 100%);
        }
    `};
`