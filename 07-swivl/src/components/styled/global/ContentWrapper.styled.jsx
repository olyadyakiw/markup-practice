import styled from "styled-components";

export const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    margin-bottom: 4rem;

    @media (max-width: 1025px) {
        gap: 2rem;
    }
`