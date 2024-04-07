import colorSheet from '../../../../CommonData/design/colors.json';
import styled from "styled-components";
import { newCssGridProps} from "./newCommonProps";
import React from "react";
import {useLuckyNumber, getColor} from "../CustomHook/LuckyNumber";
import {handleDoubleClick} from "../Others/commonUse";

interface luckyNumberProps {
    lightMode : boolean;
}

const LuckyNumberCssProps = styled.div<newCssGridProps>`
    background-color: ${(props) => 
        props.$bgColorOption? props.$bgColorOption :props.$lightMode?colorSheet.light_mode.white:colorSheet.dark_mode.white};
    color:  ${(props) => props.$lightMode?colorSheet.light_mode.text:colorSheet.dark_mode.text};;
    height: 48px;
    width: 48px;
    border-radius: 24px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LuckyNumberInputProps = styled.input.attrs((props)=>({value: props.value || '' }))<newCssGridProps>`
    background-color: ${(props) =>
        props.$bgColorOption? props.$bgColorOption :props.$lightMode?colorSheet.light_mode.white:colorSheet.dark_mode.white};
    color:  ${(props) => props.$lightMode?colorSheet.light_mode.text:colorSheet.dark_mode.text};;
    height: 36px;
    width: 36px;
    border-radius: 36px;
    line-height: 36px;  
    margin: 0;
    padding: 0;
    border: 0;
    position: relative;
    text-align: center;

    font-family: "Noto Sans KR", sans-serif;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "20px")};
  
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    &:focus {
    outline: none;
    }

`

export const LuckyNumberProps = ({lightMode} : luckyNumberProps) => {

    // return(
    //     <LuckyNumberCssProps $lightMode={lightMode}>
    //         <LuckyNumberInputProps></LuckyNumberInputProps>
    //     </LuckyNumberCssProps>
    // )
    const { numberList, handleNumber, onChange } = useLuckyNumber();
    return(
        <>
            {Array.from({ length: 6 }, (_, index) => (
                <LuckyNumberCssProps key={index} $lightMode={lightMode} $bgColorOption={getColor(lightMode, numberList ? numberList[`value${index + 1}` as keyof typeof numberList] ||null :null)}>
                    <LuckyNumberInputProps
                        $lightMode={lightMode}
                        $bgColorOption={getColor(lightMode, numberList ? numberList[`value${index + 1}` as keyof typeof numberList] ||null :null)}
                        key={index}
                        value={numberList ? numberList[`value${index + 1}` as keyof typeof numberList] || '' : ''}
                        onChange={onChange(index + 1)}
                        onDoubleClick={handleDoubleClick}
                    >

                    </LuckyNumberInputProps>
                </LuckyNumberCssProps>
            ))}
        </>
    )
}
