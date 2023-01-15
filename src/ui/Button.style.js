import styled from "styled-components";

export const Button = styled.button`
padding: 1rem 2rem;
border: 0;
border-radius: .6rem;
background-color: honeydew;
color: blueviolet;
`;

export const SubmitButton = styled(Button).attrs({
    type: 'submit'
})`
text-decoration:0;

`;