import styled from "styled-components";
import React from "react";


interface MainBoxProps {
    children: React.ReactNode;
}

const StyledMainBox = styled.div`
  border: 1px solid #cccccc;
  height: 750px;
  width: 450px;
  border-radius: 20px;
  background-color: #1B1F2B;
  display: grid;
  gap: 0px;
  padding: 8px;
  grid-template-areas:
    "HD HD HD"
    "a a a"
    "b1 b2 b3"
    "c1 c1 c1"
    "c2 c2 c2";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 4fr 6fr 5fr 3fr 30fr;
`;


const MainBox = ({ children, ...rest }: MainBoxProps) => {
    return <StyledMainBox {...rest}>{children}</StyledMainBox>;
};

export default MainBox;