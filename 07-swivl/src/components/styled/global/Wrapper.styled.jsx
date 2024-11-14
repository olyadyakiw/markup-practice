import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    padding: 4.5rem 0;

    @media (max-width: 1025px) {
        flex-direction: column;
        padding: 3rem 0;
    }
`