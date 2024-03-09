import React from "react";
import styled from "styled-components";


interface ButtonProps {
    grid: string;
    onClick: () => void;
    text?: React.ReactNode;
    fontSize? : string;
    isSelected?: boolean;
}


interface StyledButtonProps {
    $grid: string;
    $fontSize?: string;
    $isSelected?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    border-radius: 15px;
    border: 1px solid #cccccc;
    grid-area: ${(props) => props.$grid};
    cursor: pointer;
    background-color:  ${(props) => (props.$isSelected ? "#e68652" : "white")};
    outline: none;
    padding: 0;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "50px")};
    user-select: none;
    transition: background-color 0.1s ease, color 0.1s ease;
  
    &:hover {
      background-color: ${(props) => (props.$isSelected ?"#dd804d" : "#f1f1f1")};
    }
  
    &:active {
      background-color: ${(props) => (props.$isSelected ?"#cf7342" : "#ececec")};
    }
  `;

function Button({grid, onClick, text, fontSize, isSelected} : ButtonProps){
    return(
        <StyledButton
            $grid = {grid}
            $fontSize = {fontSize}
            onClick={onClick}
            $isSelected = {isSelected}
        >{text}</StyledButton>
    )
}

export default Button;