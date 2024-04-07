import styled from "styled-components";
import {newCssGridProps} from "./newCommonProps";
import colorSheet from '../../../../CommonData/design/colors.json';


export const HeaderLogoProps = styled.div<newCssGridProps>`
    height: 60px;
    width: 90%;

    //높이 중앙, 왼쪽 정렬
    display: flex;
    align-items: center;
    justify-content: left;
    
    padding-left: 10%;

    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "40px")};
`

export const HeaderContentsProps = styled.div<newCssGridProps>`
  height: 60px;
  width: 100%;

  //높이 중앙, 왼쪽 정렬
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const HeaderButtonProps = styled.button<newCssGridProps>`
  height: 60px;
  width: 30%;
  
  font-family: GmarketSansMedium;
  font-weight: bold;
  font-size: 25px;
  position: relative;

  // background-color: ${(props) =>props.$bgColorOption? props.$bgColorOption :props.$lightMode?colorSheet.light_mode.white:colorSheet.dark_mode.white};
  color:  ${(props) => props.$lightMode?colorSheet.light_mode.text:colorSheet.dark_mode.text};

  &:hover::after {
    transform: scaleX(1);
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.$lightMode?colorSheet.light_mode.text:colorSheet.dark_mode.text};
    transform: scaleX(${(props) => (props.$isSelected ? 1 : 0)});
    transform-origin: left;
    transition: transform 500ms ease;
  }
`


export default HeaderLogoProps;