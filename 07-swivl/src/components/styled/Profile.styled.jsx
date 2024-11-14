import styled from "styled-components";

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    max-width: 22rem;

    @media (max-width: 1025px) {
        max-width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 769px) {
       justify-content: center;
    }
`

export const ProfileDetails = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 0.5rem;
    position: relative;
    @media (max-width: 1025px) {
        align-items: center;
        gap: 1rem;
    }
`

export const ProfileInfo = styled.div`
    max-width: 9rem;
    @media (max-width: 1025px) {
        max-width: 100%;
    }
`

export const ProfileTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.accent};
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem;

    @media (max-width: 666px) {
        font-size: 1.25rem;
    }
`

export const ProfileLink = styled.a`
    display: inline-block;
    color: inherit;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.5px;
    text-decoration: none;
    margin-bottom: 1rem;
    transition: color .4s;
    &:hover {
        color: ${({ theme }) => theme.colors.accent};
    }
`

export const ProfileEdit = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${ ({ theme }) => theme.colors.accent };
    color: #F05D63;
    font-weight: 400;
    line-height: 1.25;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
    svg {
        width: 20px;
        height: 20px;
        fill: ${ ({ theme }) => theme.colors.accent };
    }
    &:hover {
        text-decoration: none;
    }
`

export const ProfileActions = styled.div``