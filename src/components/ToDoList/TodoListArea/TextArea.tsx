import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {gridProps} from "../../Commons/CommonProps";
import {ClickButton} from "../../Commons/CommonButton";
import ColorButton from "./ColorButton";

interface TextAreaProps extends gridProps{
    placeHolder? : string
    $height? : number
    textInputFunction? : (text :string, color :string)=>void;
}

const Container = styled.div<TextAreaProps>`
  grid-area: ${(props: TextAreaProps) => props.$grid};
  display: grid;
  
  width: 100%;
  height: 95%;

  grid-template-areas:
  "aa bb"
  "cc cc";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
  //margin-top: 10px;
`;



const StyledTextArea = styled.textarea<TextAreaProps>`
  border-radius: 15px;
  border: 1px solid #cccccc;
  justify-content: center;
  align-items: center;
  display: flex;
  grid-area: ${(props: TextAreaProps) => props.$grid};
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  width: 100%;
  height: ${(props: TextAreaProps) => props.$height}px;
  background-color: #ffffff;
  color: #000000;
  overflow-y: hidden;
  line-height: ${(props: TextAreaProps) => props.$height}px;
  //margin: 5px auto;
  padding-left: 10px;
  padding-right: 10px;
  resize: none;
  
  margin-left: 15%;
  margin-top: 2%;
  &:focus {
    outline: none;
  }
`;

function InputComponent({ $grid,placeHolder, textInputFunction }: TextAreaProps) {
    const [text, setText] = useState('');
    const [textareaHeight, setTextareaHeight] = useState<number>(24);
    const [textColor, setTextColor] = useState("#f29b76");

    function changeColor(color: string){
        setTextColor(color);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {    //엔터키 먹통
        if (event.key === "Enter") {
            event.preventDefault(); // 엔터키 입력을 방지합니다.
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {


        const textareaLineHeight = 28; // You can adjust this value according to your textarea's line-height


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
        console.log("submit");
        if (!text.trim()) {
            alert("최소 1글자 이상을 입력해주세요."); // 또는 다른 방식으로 사용자에게 메시지를 전달할 수 있습니다.
            return; // 빈 문자열이면 함수를 여기서 종료합니다.
        }
        if (textInputFunction) {
            textInputFunction(text, textColor);
            setText("");
        }
    }

    return (
        <>
            <Container
                $grid={$grid}
            >
                <StyledTextArea
                    value={text}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    rows={1} // 최대 2줄
                    maxLength={15} // 최대 20글자
                    $grid={"aa"} // 여기에 그리드 영역 값 넣기
                    spellCheck={false}
                    $height={textareaHeight*1.5}
                    placeholder={placeHolder || "값을 입력하세요"}
                />
                <ClickButton value={"ADD"} onClick={Submit} $backgroundColor={"#FF4D4D"} $hoverColor={"#d60000"} $activeColor={"#af0000"} $height={"60%"} $fontSize={"20px"} $margin={"8.5% 0 0 20%"} $width={"50%"} $grid={"bb"}></ClickButton>
                <ColorButton color={textColor} $grid={"cc"} $marginLeft={"40%"} updateColor={(newColor)=>changeColor(newColor)}></ColorButton>
            </Container>

        </>
    );
}

export default InputComponent;