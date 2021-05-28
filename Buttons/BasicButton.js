import styled from 'styled-components';

const BasicButton = styled.button `
width: ${props => props.width ? props.width : '200px'};
cursor: pointer;
background-color: ${props => props.backgroundColor ? props.backgroundColor : "pink"};
color: ${props => props.color ? props.color : "black"};
font-size: ${props => props.fontSize ? props.fontSize : "1em"};
margin: 1em;
padding: 0.25em 1em;
border: 1px solid ${props => props.borderColor ? props.borderColor : "white"};
border-radius: ${props => props.borderRadius ? '90px' : "5px"};
text-align: center;
transition: 0.1s;
box-shadow: 0 2px 2px 1px #666;

&:active{
    transform: translateY(1px);
}
`;

export default BasicButton;