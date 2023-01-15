import styled from "styled-components";

export const TopHeading = styled.h1`
    margin: 0 0 0 0;
    padding: 0 0 1.5rem 0;
    color: purple ;
    font-size: 3rem;
    font-weight:200 ;
    text-align: center;
`
export const Title = styled.h2`
    margin: 0 0 1rem 0;
    color: green;
    font-weight: 600;
    font-size: 2rem;
`;

export const SubTitle = styled.h4`
    margin: 0 0 1rem 0;
    color: pink;
    font-weight: 400;
    font-size: 2rem;

`;

export const TextBody = styled.p`
    margin: 0 0 .3rem 0;
    color: white;
    font-size: ${({ blueText }) => blueText ? '4rem': '1rem'};
    font-weight: 200;
    color: ${ ({ blueText, redText }) => blueText ? 'lightblue' : 'yellow' && redText ? 'red' : 'yellow' };
`;