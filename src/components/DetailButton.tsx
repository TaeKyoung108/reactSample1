import Button from "./Button";
import React from "react";


interface SubmitButtonProps {
    grid: string;
    onClick: () => void;
    text?: React.ReactNode;
    fontSize? : string;
}

interface PickButtonProps {
    grid: string;
    onClick: () => void;
    text?: React.ReactNode;
    fontSize? : string;
    isSelected :boolean;
}

function SubmitButton({grid, onClick, text, fontSize} : SubmitButtonProps){
    return(
        <Button grid={grid} onClick={onClick} text={text} fontSize={fontSize}></Button>
    )
}

function PickButton({grid, onClick, text, fontSize,isSelected} :PickButtonProps){
    return(
        <Button grid={grid} onClick={onClick} text={text} fontSize={fontSize} isSelected={isSelected}></Button>
    )
}

export {SubmitButton, PickButton}