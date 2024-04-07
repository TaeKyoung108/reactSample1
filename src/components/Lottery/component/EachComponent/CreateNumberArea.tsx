import styled from "styled-components";
import {newCssGridProps} from "../StyledComponent/newCommonProps";
import colorSheet from "../../../../CommonData/design/colors.json";
import {useState} from "react";

interface CreateNumberProps {
    $lightMode : boolean;
}
//전체 케이스
export const CreateNumberWrapper = styled.div<newCssGridProps>`
    width: 580px;
    height: 80px;
    background-color: ${(props)=>props.$lightMode?colorSheet.light_mode.bg:colorSheet.dark_mode.bg};
  
    display: flex;
    flex-direction: row;

    margin: 4px 0 4px 0;
`
export const SelectCreate = styled.div<newCssGridProps>`
`

const CreateNumberArea = ({$lightMode}:CreateNumberProps) => {

    // 랜덤인지 직접 입력인지
    const [randomCreate,setRandomCreate] = useState<boolean>(true);

    return(
        <CreateNumberWrapper $lightMode={$lightMode}>

        </CreateNumberWrapper>
    )

}

export default CreateNumberArea;