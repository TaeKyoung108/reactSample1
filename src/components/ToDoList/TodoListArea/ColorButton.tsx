import styled from "styled-components";
import {cssGridProps, gridProps} from "../../Commons/CommonProps";
import {PickButton} from "../../Calculator";
import {Dispatch, SetStateAction} from "react";

type ColorBox = {
    color: string;
    isSelected: boolean;
    boxSize: string;
};

interface colorGridProps extends gridProps{
    color: string;
    setState : Dispatch<SetStateAction<string>>;
}

const initialValue :ColorBox[]  =[
    {color: "#f29b76", isSelected: true, boxSize: "16px"},
    {color: "#facd89", isSelected: false, boxSize: "16px"},
    {color: "#cce198", isSelected: false, boxSize: "16px"},
    {color: "#89c997", isSelected: false, boxSize: "16px"},
    {color: "#7ecef4", isSelected: false, boxSize: "16px"},
    {color: "#8f82bc", isSelected: false, boxSize: "16px"},
    {color: "#c490bf", isSelected: false, boxSize: "16px"},
    {color: "#f29c9f", isSelected: false, boxSize: "16px"}
]

const ListSelectButtonContainerProps = styled.button<cssGridProps>`
  grid-area: ${(props)=>(props.$grid)};
  border: 0.5px solid #000000;
  border-radius: 20px;
  height: 30px;
  width: 200px;
  background-color: #FFECDB;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;
const ListSelectButtonProps = styled.button<cssGridProps>`
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: ${(props)=>props.$backgroundColor ?? "#000000"};
    color: ${(props)=>props.$color ?? "#ffffff"};
    outline: none;
    padding: ${(props) => (props.$padding ? props.$padding : 0)};
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "25px")};
    user-select: none;
    transition: background-color 0.1s ease, color 0.1s ease;
    height: ${(props)=>props.$isSelected ? "20px" : "14px"};
    width: ${(props)=>props.$isSelected ? "20px" : "14px"};
    line-height: ${(props) => (props.$height ? props.$height : "auto")};
    text-align: center;
    margin: 2px;
    transition-property: width,height;
    transition-duration: 0.2s;
    &:hover {

      height: 20px;
      width: 20px;
    }
  
    &:active {
      height: 20px;
      width: 20px;
    }
  `;

function ColorButton({$grid, color, setState} : colorGridProps){

    return(
        <ListSelectButtonContainerProps $grid={$grid}>
            {[...initialValue].map((x) => (
                <ListSelectButtonProps key={x.color} $color={x.color} $backgroundColor={x.color} $isSelected={x.color === color} onClick={()=>{setState(x.color)}}>

                </ListSelectButtonProps>))}
        </ListSelectButtonContainerProps>
    )
}


export default ColorButton;