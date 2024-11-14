import styled from "styled-components";

export const SwitcherWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const SwitcherButton = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
    width: 40px;
    height: 24px;
    &:checked ~ span:after {
        display: block;
    }
`

export const SwitcherInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ span {
        background-color: ${ ({ theme }) => theme.colors.accent };
        border: 2px solid transparent;
        &:after {
            left: 18px;
            background-color: #fff;
            top: 1px;
        }
    }

`

export const SwitcherTitle = styled.span`
    font-weight: 600;
`

export const SwitcherLabel = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 20px;
    transition: all .4s;
    &:after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: ${ ({ theme }) => theme.colors.accent };
        transition: all .4s;
    }
`