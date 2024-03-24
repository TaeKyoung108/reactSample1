import styled from "styled-components";
import {cssGridProps, gridProps} from "../../Commons/CommonProps";
import {PickButton} from "../../Calculator";
import {Dispatch, SetStateAction} from "react";

type ColorBox = {
    color: string;
    isSelected: boolean;
};

interface colorGridProps extends cssGridProps{
    color: string;
    updateColor : (newColor: string) =>void;
}

const initialValue :ColorBox[]  =[
    {color: "#f29b76", isSelected: true},
    {color: "#facd89", isSelected: false},
    {color: "#cce198", isSelected: false},
    {color: "#89c997", isSelected: false},
    {color: "#7ecef4", isSelected: false},
    {color: "#8f82bc", isSelected: false},
    {color: "#c490bf", isSelected: false},
    {color: "#f29c9f", isSelected: false}
]

const ListSelectButtonContainerProps = styled.div<cssGridProps>`
  grid-area: ${(props)=>(props.$grid)};
  border: 0.5px solid #000000;
  border-radius: 20px;
  height: 28px;
  width: 200px;
  background-color: #FFECDB;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props)=>props.$marginLeft ? props.$marginLeft : 0};
  margin-top: ${(props)=>props.$marginTop ? props.$marginTop : 0};
`;
const ListSelectButtonProps = styled.button<cssGridProps>`
    border-radius: 50%;
    //border: none;
    border: ${(props)=>props.$isSelected ? "1.5px solid #000000" : "none"};
    cursor: pointer;
    background-color: ${(props)=>props.$backgroundColor ?? "#000000"};
    color: ${(props)=>props.$color ?? "#ffffff"};
    outline: none;
    padding: ${(props) => (props.$padding ? props.$padding : 0)};
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "25px")};
    user-select: none;
    transition: background-color 0.1s ease, color 0.1s ease;
    height: ${(props)=>props.$isSelected ? "16px" : "14px"};
    width: ${(props)=>props.$isSelected ? "16px" : "14px"};
    line-height: ${(props) => (props.$height ? props.$height : "auto")};
    text-align: center;
    margin: 2px;
    transition-property: width,height;
    transition-duration: 0.2s;
    &:hover {

      height: ${(props)=>props.$isSelected ? "18px" : "16px"};
      width: ${(props)=>props.$isSelected ? "18px" : "16px"};
      border: ${(props)=>props.$isSelected ? "1.5px solid #000000" : "1px solid #000000"};
    }
  
    &:active {
      height: 16px;
      width: 16px;
      border: 1.5px solid #000000;
    }
  `;

function ColorButton({$grid, color, $marginLeft, updateColor} : colorGridProps){

    return(
        <ListSelectButtonContainerProps $grid={$grid} $marginLeft={$marginLeft} $marginTop={"1%"}>
            {[...initialValue].map((x) => (
                <ListSelectButtonProps key={x.color} $color={x.color} $backgroundColor={x.color} $isSelected={x.color === color} onClick={()=>updateColor(x.color)}>

                </ListSelectButtonProps>))}
        </ListSelectButtonContainerProps>
    )
}


export default ColorButton;