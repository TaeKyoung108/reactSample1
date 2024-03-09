import React from "react";
import styled from "styled-components";

interface MainBoxProps {
    children: React.ReactNode;
}

const StyledMainBox = styled.div`
  border: 1px solid #cccccc;
  height: auto;
  width: auto;
  border-radius: 20px;
  background-color: #ffffff;
  display: grid;
  gap: 12px;
  padding: 20px;
  grid-template-areas:
    "HD HD HD HD HD"
    "H1 a a a a"
    "H2 a a a a"
    "H3 a a a a"
    "H4 a a a a"
    "f g g h h"
    "N1 N2 N3 N4 N5";
  grid-template-columns: 80px 80px 80px 80px 80px;
  grid-template-rows: 80px 80px 80px 80px 80px 80px 80px;
`;

export const MainBox = ({ children, ...rest }: MainBoxProps) => {
    return <StyledMainBox {...rest}>{children}</StyledMainBox>;
};

export default MainBox;
