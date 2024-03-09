import styled from "styled-components";
import {commonStringProps, gridProps} from "../Commons/CommonProps";


interface HeaderProps extends commonStringProps{
}



const StyledHeader = styled.div<gridProps>`
  border-radius: 15px;
  border: 1px solid #1C202C;
  grid-area: ${(props)=>props.$grid};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  gap: 25px;
  //padding: 0px 40px 0px 40px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 3px;
  color: #FFFFFF;
  background-color: #2A2D3C;
`;


const StyledHeaderProps = ({value,$grid}:commonStringProps) =>{
    return (
        <StyledHeader $grid={$grid}>{value}</StyledHeader>
    )
}


export default StyledHeaderProps;