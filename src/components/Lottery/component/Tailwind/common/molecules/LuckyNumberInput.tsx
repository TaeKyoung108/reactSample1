import {getRandomNumber} from "../../../CustomHook/RandomNumber";
import getColorClass from "./getColorClass";
import React from "react";
import {LuckyNumberReturn} from "../../../CustomHook/LuckyNumber";

interface LuckyNumberInputProps extends LuckyNumberReturn{
    lightMode: boolean;
    isManual: boolean;
    valueNumber: number;
}
const LuckyNumberInput = ({lightMode,numberList,handleNumber,onChange, isManual, valueNumber}:LuckyNumberInputProps) =>{

    //중복 안생기게 random
    const setRandomNumberOnClick = (targetValueNumber: number)=> {
        let listTemp :number[] =Object.values(numberList).filter(value => value !== null) as number[];
        let randomValue = getRandomNumber().getRandom(1, 45);
        while (listTemp.includes(randomValue) ){
            console.log(randomValue)
            randomValue = getRandomNumber().getRandom(1, 45);
        }
        if(!isManual) {
            handleNumber(targetValueNumber, randomValue);
        }
    }
    return(<input className={`ml-2 h-[48px] w-[48px] rounded-[48px] text-[20px] text-center align-middle leading-[36px] outline-none ${getColorClass( lightMode,numberList ? numberList[`value${valueNumber}` as keyof typeof numberList] : null)}`}
                  key={valueNumber}
                  value={numberList ? numberList[`value${valueNumber}` as keyof typeof numberList] || '' : ''}
                  onChange={onChange(valueNumber)}
                  readOnly={!isManual}
                  onClick={()=>setRandomNumberOnClick(valueNumber)}
    />)
}

export default LuckyNumberInput;