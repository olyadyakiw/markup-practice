import styled from "styled-components"

export const Avatar = styled.img`
    width: ${ ( { width } ) => width };
    height: ${ ( { height } ) => height };
    border-radius: 50%;
    object-fit: cover;
`