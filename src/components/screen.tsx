import React from "react";
import styled from "styled-components";
import Warning from "./warning";

interface ScreenBoxProps {
    PastNumber: number;
    grid : string;
    fontSize? : string;
    color? : string;
    isUnValid? : boolean;
}

interface ScreenBoxComponentProps {
    $grid : string;
    $fontSize? : string;
    $color? : string;
}

const ScreenBoxComponent = styled.div<ScreenBoxComponentProps>`
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  font-family: "Kdam Thmor Pro", sans-serif;
  font-weight: 400;
  grid-area: ${(props) => props.$grid};
  font-size: ${(props) => props.$fontSize ? props.$fontSize : "20px"};
  color: ${(props) => props.$color ? props.$color : "#999999"};
`;

function ScreenBox({PastNumber,grid,fontSize,color,isUnValid} : ScreenBoxProps){

    return (
        <ScreenBoxComponent $grid = {grid} $fontSize={fontSize} $color={color}>{PastNumber}{isUnValid?<Warning></Warning>:null}</ScreenBoxComponent>
    )
}


export default ScreenBox;