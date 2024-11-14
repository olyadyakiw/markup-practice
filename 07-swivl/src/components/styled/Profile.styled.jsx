import styled from "styled-components";

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    max-width: 22rem;
`

export const ProfileDetails = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 0.5rem;
`

export const ProfileInfo = styled.div`
    max-width: 9rem;
`

export const ProfileTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.accent};
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
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