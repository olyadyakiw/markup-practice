import styled from "styled-components";

export const Container = styled.div`
    max-width: ${({ theme }) => (theme.container.padding * 2) + +theme.container.width }px;
    margin: 0 auto;
    width: 100%;
    padding: 0 ${({ theme }) => theme.container.padding}px;
    position: relative;
`