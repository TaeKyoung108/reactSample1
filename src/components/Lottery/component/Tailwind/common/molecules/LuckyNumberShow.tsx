import getColorClass from "./getColorClass";
import React from "react";

interface LuckyNumberShowProps{
    numberList: {
        value1: number | null;
        value2: number | null;
        value3: number | null;
        value4: number | null;
        value5: number | null;
        value6: number | null;
    };
    lightMode: boolean;
    valueNumber: number;
}
const LuckyNumberShow = ({lightMode,numberList, valueNumber}:LuckyNumberShowProps) =>{

    return(
        <div className={`ml-2 h-[48px] w-[48px] rounded-[48px] text-[20px] flex justify-center items-center leading-[36px] outline-none ${getColorClass(lightMode, numberList ? numberList[`value${valueNumber}` as keyof typeof numberList] : null)}`} key={"lucky_number" + valueNumber}>
                <span className={`leading-[36px] text-[20px] text-center`}>
                    {numberList ? numberList[`value${valueNumber}` as keyof typeof numberList] || '' : ''}
                </span>
        </div>
    )
}

export default LuckyNumberShow;