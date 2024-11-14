import styled from "styled-components";

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    
    @media (max-width: 666px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const CardWrapper = styled.div`
    border-radius: 8px;
    background: #FFF;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 280px;

    @media (max-width: 769px) {
        min-height: 220px;
    }
`

export const CardTitle = styled.h3`
    font-size: 2.25rem;
    font-family: ${({ theme }) => theme.fonts.accent};
    font-weight: 400;
    margin: 0;
    margin-bottom: 2.75rem;

    @media (max-width: 769px) {
        font-size: 1.5rem;
    }
`

export const CardBottom = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CardUser = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
`

export const CardName = styled.a`
    color: inherit;
    text-decoration: none;
    transition: color .4s;
    &:hover {
        color: ${({theme}) => theme.colors.accent}
    }
`

export const CardTop = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    align-items: center;
    font-weight: 600;
    margin-bottom: 10px;
    svg {
        width: 16px;
        height: 16px;
    }
`

export const CardShare = styled.button`
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    color: ${({theme}) => theme.colors.accent};
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    text-align: right;
    &:hover {
        text-decoration: underline;
    }
`

export const CardTag = styled.a`
    border-radius: 6px;
    background-color: #ECF1F8;
    padding: 0.25rem;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    color: inherit;
    transition: opacity .4s;
    &:hover {
        opacity: 0.8;
    }
`