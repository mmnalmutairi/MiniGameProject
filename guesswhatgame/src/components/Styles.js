import styled from "styled-components";

export const Header = styled.p`
font-weight: bold;
font-size: 50px;
color: white;
font-family: "Lucida Console", "Courier New", monospace;
padding-top: 80px;
cursor: pointer;
`;

export const Highlighted = styled.span`
font-weight: bold;
font-size: 60px;
color: red;
font-family: "Lucida Console", "Courier New", monospace;
`;

export const Box = styled.div`
background-color: black; opacity:0.8;
width: 800px;
height: 800px;
margin-left: 300px;
box-shadow: 0 0 5px rgba(0,0,0,3);
border-radius: 7px;
`;


export const DBox = styled.input`
width: 50%;
background: #f8f9fa;
padding: 12px 20px;
margin: 8px 0;
border: 2px solid rgb(255, 251, 0);
border-radius: 6px;
`;

export const Hintbrief = styled.p`
font-weight: bold;
font-size: 20px;
font-family: "Lucida Console", "Courier New", monospace;
color: white;
padding: 30px;

`;

export const HintWord = styled.text`
font-weight: bold;
font-size: 30px;
font-family: "Lucida Console", "Courier New", monospace;
color: white;
padding: 5px;
text-shadow: 2px 2px 5px red;
`;

export const Attempt = styled.h3`
font-weight: bold;
font-size: 30px;
color: white;
font-family: "Lucida Console", "Courier New", monospace;
padding-top: 20px;
`;
