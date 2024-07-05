import React from "react";
import {FaShuffle} from "react-icons/fa6";
import LuckyNumberShow from "../common/molecules/LuckyNumberShow";

interface BodyProps {
    lightMode: boolean;
    bodyList: {
        value1: number | null;
        value2: number | null;
        value3: number | null;
        value4: number | null;
        value5: number | null;
        value6: number | null;
    }[];
    handleListChangeClick: (index: number) => void;
    handleListResetClick: () => void;
    handleListChangeAllClick: () => void;
}

//아직 다크모드 색 구현 제대로 안됨
const CreateNumberMainBody = ({lightMode, bodyList, handleListChangeClick, handleListResetClick, handleListChangeAllClick} : BodyProps) => {
    return(
        <div className={`mt-[1px] h-[608px] w-[580px] font-gmarketSans flex flex-col justify-center items-center select-none ${lightMode?'bg-light_bg':'bg-dark_bg saturate-75'}`}>
            <span className ={`mb-3 text-3xl ${lightMode ? 'text-light_text' : 'text-dark_text_sub'}`}>1302회차</span>
            {bodyList.map((list, index)=>(
                <div className={`mt-2 h-[12%] w-[90%] font-gmarketSans flex flex-row justify-center items-center select-none border-solid border-2 rounded-[40px] ${lightMode?'bg-light_bg border-light_bg_sub':'bg-dark_bg_sub2 border-dark_bg_sub2'}`}
                    key={"list"+index}>
                    {/*<span className ={`w-[5%] text-3xl ${lightMode ? 'text-light_text' : 'text-dark_text'}`}>{index+1}</span>*/}
                    <span className={`mt-2 w-[5%] text-3xl flex justify-center items-center text-center ${lightMode ? 'text-light_text' : 'text-dark_text_sub'}`}>{index + 1}</span>
                    <div className={`ml-10 h-[65%] w-[2px] ${lightMode ? 'bg-light_text_sub' : 'bg-dark_grey'}`}></div>
                    {Array.from({ length: 6 }, (_, index) => (
                        <LuckyNumberShow key={index+1} numberList={list} lightMode={lightMode} valueNumber={index+1}></LuckyNumberShow>
                    ))}
                    <button onClick={() => handleListChangeClick(index)}>
                        <FaShuffle className={`ml-2 ${lightMode ? 'text-light_text_sub' : 'text-dark_text'}`} size={25}/>
                    </button>
                </div>

            ))}
            <div className={`mt-10 h-[8%] w-[95%] flex flex-row justify-around`}>
                <button className={`h-[100%] w-[30%] flex justify-center items-center border-solid border-2 rounded-[40px] hover:bg-gradient_orange_1 ${lightMode?'bg-light_bg border-light_bg_sub hover:bg-gradient_orange_1':'bg-dark_bg_sub border-dark_bg hover:bg-gradient_green_1'}`}
                        onClick={handleListResetClick}>
                    초기화
                </button>
                <button className={`h-[100%] w-[30%] flex justify-center justify-center items-center text-center border-solid border-2 rounded-[40px] ${lightMode?'bg-light_bg border-light_bg_sub hover:bg-gradient_orange_1':'bg-dark_bg_sub border-dark_bg hover:bg-gradient_green_1'}`}>
                    번호저장</button>
                <button className={`h-[100%] w-[30%] flex justify-center justify-center items-center text-center border-solid border-2 rounded-[40px] ${lightMode?'bg-light_bg border-light_bg_sub hover:bg-gradient_orange_1':'bg-dark_bg_sub border-dark_bg hover:bg-gradient_green_1'}`}
                        onClick={handleListChangeAllClick}>
                    전체생성</button>
            </div>

        </div>
    )
}

export default CreateNumberMainBody;

