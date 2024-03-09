import styled from "styled-components";
import {cssGridProps, gridProps, Props} from "./CommonProps";
import React from "react";


interface clickButtonProps extends cssGridProps, Props<React.ReactNode>{
  onClick: () => void;
}

const StyledButton = styled.button<cssGridProps>`
    border-radius: 15px;
    border: 1px solid #000000;
    grid-area: ${(props) => props.$grid};
    cursor: pointer;
    background-color:  ${(props) => (props.$isSelected ?? false ? "#56657C" : props.$backgroundColor ?? "#2A2D3C")};
    color: ${(props)=>props.$color ?? "#ffffff"};
    outline: none;
    padding: ${(props) => (props.$padding ? props.$padding : 0)};
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "25px")};
    user-select: none;
    transition: background-color 0.1s ease, color 0.1s ease;
    height: ${(props) => (props.$height ? props.$height : "auto")};
    width: ${(props) => (props.$width ? props.$width : "auto")};
    line-height: ${(props) => (props.$height ? props.$height : "auto")};
    text-align: center;
    margin: ${(props) => (props.$margin ? props.$margin : "0")};
  
    &:hover {
      background-color: ${(props) => (props.$hoverColor ? props.$hoverColor : "#4b586e")};
    }
  
    &:active {
      background-color: ${(props) => (props.$activeColor ? props.$activeColor : "#4b586e")};
    }
  `;
const StyledButtonText = styled.p<cssGridProps>`
        font-family: "Noto Sans KR", sans-serif;
        font-size: ${(props) => (props.$fontSize ? props.$fontSize : "25px")};
        height: ${(props) => (props.$height ? props.$height : "auto")};
        line-height: ${(props) => (props.$height ? props.$height : "auto")};
        text-align: center;
        margin: 0;
        transform: translate(0, -2px);
    `;


export const ClickButton = ({value, $grid, onClick, $isSelected, $fontSize, $backgroundColor, $color, $height ,$padding, $margin, $width, $hoverColor, $activeColor}:clickButtonProps)=>{
  return(
      <StyledButton
          $grid={$grid}
          onClick={onClick}
          $isSelected={$isSelected}
          $fontSize={$fontSize}
          $backgroundColor={$backgroundColor}
          $color={$color}
          $height={$height}
          $padding={$padding}
          $margin={$margin}
          $width={$width}
          $hoverColor={$hoverColor}
          $activeColor={$activeColor}
      >
          <StyledButtonText $height={$height}>{value}</StyledButtonText></StyledButton>
  )
}
