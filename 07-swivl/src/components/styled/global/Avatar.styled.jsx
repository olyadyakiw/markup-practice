import styled from "styled-components"

export const Avatar = styled.img`
    width: ${ ( { width } ) => width }px;
    height: ${ ( { height } ) => height }px;
    border-radius: 50%;
    background-color: #B2B3BB;
    object-fit: cover;
`