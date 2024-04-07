import styled from "styled-components";
import {newCssGridProps} from "./newCommonProps";
import colorSheet from "../../../../CommonData/design/colors.json";


const TotalPageWrapper = styled.div<newCssGridProps>`
    width: 580px;
    height: 1000px;

  
`
export const HeaderWrapper =  styled.div<newCssGridProps>`
    height: 120px;
    width: 580px;
    background: linear-gradient(to right,${colorSheet.gradient_color.gradient_orange_1},${colorSheet.gradient_color.gradient_orange_2});
`



export const NumberListWrapper = styled.div<newCssGridProps>`
    width: 580px;
    height: 596px;
    background-color: ${(props)=>props.$lightMode?colorSheet.light_mode.bg:colorSheet.dark_mode.bg};

    margin: 4px 0 4px 0;
`

export const TabWrapper = styled.div<newCssGridProps>`
    width: 580px;
    height: 100px;
    background-color: ${(props)=>props.$lightMode?colorSheet.light_mode.bg:colorSheet.dark_mode.bg};
    margin: 4px 0 4px 0;
`

export default TotalPageWrapper;