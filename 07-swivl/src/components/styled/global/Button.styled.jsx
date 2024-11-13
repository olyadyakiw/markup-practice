import styled from "styled-components";

export const Button = styled.button`
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 0;
    transform: translateY(-50%);
    background: linear-gradient(135deg, #FF974F 0%, #E32C75 100%);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    transition: all .4s;
    &:hover {
        scale: 1.1;
        transform-origin: center center;
    }
    @media (max-width: 666px) {
        width: 50px;
        height: 50px;
    }
    svg {
        fill: #ffffff;
        width: 20px;
        height: 20px;
    }
`