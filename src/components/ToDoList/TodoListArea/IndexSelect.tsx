import styled from "styled-components";
import {cssGridProps} from "../../Commons/CommonProps";


interface IndexWithCss extends cssGridProps{
    currentIndex : number;
    maxIndex : number;
    onClick : (number : number)=>void;
}


const IndexSelectProps = styled.div<cssGridProps>`
  grid-area: ${(props)=>(props.$grid)};
  border: 0.5px solid #000000;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  background-color: #2A2D3C;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: ${(props)=>props.$marginLeft ? props.$marginLeft : 0};
`;


const IndexButtonProps = styled.button<cssGridProps>`
    border-radius: 50%;
    //border: none;
    border: ${(props)=>props.$isSelected ? "1px solid #000000" : "none"};
    cursor: pointer;
    background-color: ${(props)=>props.$backgroundColor ?? "#56657C"};
    color: ${(props)=>props.$color ?? "#ffffff"};
    outline: none;
    padding: ${(props) => (props.$padding ? props.$padding : 0)};
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "15px")};
    user-select: none;
    transition: background-color 0.1s ease, color 0.1s ease;
    // height: ${(props)=>props.$isSelected ? "22px" : "20px"};
    // width: ${(props)=>props.$isSelected ? "22px" : "20px"};
    height: ${(props) => props.$isSelected ? "calc(70% + 2px)" : "70%"};
    aspect-ratio: 1/1;
    line-height: ${(props) => (props.$height ? props.$height : "20px")};
    text-align: center;
    margin-left: ${(props)=>props.$isSelected ? "1px" : "2px"};
    margin-right: ${(props)=>props.$isSelected ? "1px" : "2px"};
    &:hover {
      border: 1px solid #000000;
      height: calc(70% + 2px);
      margin-left: 1px;
      margin-right: 1px;
    }
  
    &:active {
      //border: 1.5px solid #000000;
    }
  `;



function IndexSelect({$grid, currentIndex, maxIndex, onClick} : IndexWithCss){

    return(
        <IndexSelectProps $grid={$grid}>
            {
                Array.from({length : Math.min(maxIndex, 5)}, (_,index) =>(
                    <IndexButtonProps key={index} $isSelected={currentIndex===(index+1)} onClick={()=>onClick(index+1)}>{index+1}</IndexButtonProps>
                ))
            }
        </IndexSelectProps>
    )
}

export default IndexSelect;