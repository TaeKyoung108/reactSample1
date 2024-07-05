import {useSelector} from "react-redux";
import {lightModeState} from "../../../Redux/lightMode";
import React from "react";

interface StatusTabProps{
    numberStatus: number;
    changeNumberStatus: (num: number) => void;
}

export const StatusTab = ({numberStatus, changeNumberStatus}: StatusTabProps) => {
    const lightMode = useSelector((state :lightModeState)=> {
        return state.lightMode;
    })

    return(
        <div className={`mt-[1px] h-[50px] w-[580px] flex justify-around items-center ${lightMode?'bg-light_bg':'bg-dark_bg'}`}>
            <div className="h-[60%] w-full flex flex-row justify-center items-center">
                <button className={`border-[2px] mr-1 h-[100%] w-[45%] rounded flex items-center justify-center font-gmarketSans font-semibold text-lg 
                        ${lightMode?'bg-light_bg border-light_bg_sub':'bg-dark_button'}  `}
                        onClick={()=>changeNumberStatus(1)}
                >
                    <span className={`${numberStatus===1? 'text-gradient_orange_1' : lightMode?'text-light_text' : 'text-dark_text_sub'}`}>번호별 당첨 통계</span>
                </button>
                <button className={`border-[2px] h-[100%] w-[45%] rounded flex items-center justify-center font-gmarketSans font-semibold text-lg 
                        ${lightMode?'bg-light_bg border-light_bg_sub':'bg-dark_button text-dark_text_sub'}`}
                        onClick={()=>changeNumberStatus(2)}
                >
                    <span className={`${numberStatus===2? 'text-gradient_orange_1' : lightMode?'text-light_text' : 'text-dark_text_sub'}`}>구간별 당첨 통계</span>
                </button>
            </div>
        </div>
    )
}