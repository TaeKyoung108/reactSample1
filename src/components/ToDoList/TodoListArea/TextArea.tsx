import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {gridProps} from "../../Commons/CommonProps";
import {ClickButton} from "../../Commons/CommonButton";
import ColorButton from "./ColorButton";

interface TextAreaProps extends gridProps{
    placeHolder? : string
    $height? : number
}

const Container = styled.div<gridProps>`
  grid-area: ${(props: TextAreaProps) => props.$grid};
  display: grid;

  grid-template-areas:
  "aa bb"
  "cc cc";
  grid-template-columns: 200px 100px;
  grid-template-rows: 40px 40px;
  gap: 10px;
`;



const StyledTextArea = styled.textarea<TextAreaProps>`
  border-radius: 15px;
  border: 1px solid #cccccc;
  justify-content: center;
  align-items: center;
  display: flex;
  grid-area: ${(props: TextAreaProps) => props.$grid};
  font-size: 12px;
  width: 180px;
  height: ${(props: TextAreaProps) => props.$height}px;
  background-color: #ffffff;
  color: #000000;
  overflow-y: hidden;
  line-height: 24px;
  margin: 5px auto;
  padding-left: 10px;
  padding-right: 10px;
  resize: none;
`;

function InputComponent({ $grid,placeHolder }: TextAreaProps) {
    const [text, setText] = useState('');
    const [textareaHeight, setTextareaHeight] = useState<number>(24);
    const [textColor, setTextColor] = useState("#f29b76");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textareaLineHeight = 24; // You can adjust this value according to your textarea's line-height


        const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);
        const newRows = Math.min(2, currentRows);
        // setTextareaHeight(newRows * textareaLineHeight);

        // setText(event.target.value);
        // const lines = event.target.value.split('\n');
        // if (lines.length <= 2) {
        //     setText(event.target.value);
        // } else {
        //     setText(lines.slice(0, 2).join('\n'));
        // }

        // const lines = event.target.value.split('\n');
        // const truncatedText = lines
        //     .map(line => line.slice(0, 10))
        //     .join('\n')
        //     .slice(0, 20);
        // setText(truncatedText);

        setText(event.target.value);

    };
    function Submit(){

    }

    return (
        <>
            <Container
                $grid={$grid} // 여기에 그리드 영역 값 넣기
            >
                <StyledTextArea
                    value={text}
                    onChange={handleChange}
                    rows={1} // 최대 2줄
                    maxLength={14} // 최대 20글자
                    $grid={"aa"} // 여기에 그리드 영역 값 넣기
                    spellCheck={false}
                    $height={textareaHeight}
                    placeHolder={placeHolder || "값을 입력하세요"}
                />
                <ClickButton value={"ADD"} onClick={()=>Submit} $backgroundColor={"#FF4D4D"} $hoverColor={"#d60000"} $activeColor={"#af0000"} $height={"30px"} $fontSize={"20px"} $margin={"5px auto"} $width={"80px"} $grid={"bb"}></ClickButton>
                <ColorButton color={textColor} $grid={"cc"} setState={setTextColor}></ColorButton>
            </Container>

        </>
    );
}

export default InputComponent;