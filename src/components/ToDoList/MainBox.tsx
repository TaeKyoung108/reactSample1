import styled from "styled-components";
import React from "react";


interface MainBoxProps {
    children: React.ReactNode;
}

const StyledMainBox = styled.div`
  border: 1px solid #cccccc;
  height: auto;
  width: 300px;
  border-radius: 20px;
  background-color: #1B1F2B;
  display: grid;
  gap: 0px;
  padding: 8px;
  grid-template-areas:
    "HD HD HD"
    "a a a"
    "b1 b2 b3"
    "c c c"
    "c c c"
    "c c c";
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 40px 100px 60px 80px 80px 80px 80px;
`;


const MainBox = ({ children, ...rest }: MainBoxProps) => {
    return <StyledMainBox {...rest}>{children}</StyledMainBox>;
};

export default MainBox;