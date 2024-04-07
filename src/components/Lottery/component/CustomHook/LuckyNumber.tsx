import React, {useState} from "react";
import colorSheet from '../../../../CommonData/design/colors.json';

export interface LuckyNumberReturn {
    numberList: {
        value1: number | null;
        value2: number | null;
        value3: number | null;
        value4: number | null;
        value5: number | null;
        value6: number | null;
    };
    handleNumber: (valueNumber: number, value: number | null)=>void;
    onChange: (valueNumber: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const useLuckyNumber = ():LuckyNumberReturn => {
    const [numberList, setNumberList] = useState<LuckyNumberReturn['numberList']>({
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: null,
        value6: null,
    });
    const handleNumber = (valueNumber: number, value: number | null) =>{

        setNumberList(prevState => ({
            ...prevState,
            [`value${valueNumber}`]: value
        }));
    }

    // input 일어날떄 handler
    const onChange = (valueNumber: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        // console.log("input value : " +  event.target.value);
        // console.log('event.currentTarget.value:', event.currentTarget.value);
        if (isNaN(parseInt(inputValue))) {
            handleNumber(valueNumber, null)
        } else if (inputValue.length <= 2) {
            if (parseInt(inputValue) >= 1 && parseInt(inputValue)<=45) {
                handleNumber(valueNumber, parseInt(inputValue));
            }
        }
        // console.log(numberList);
    };

    return {
        numberList,
        handleNumber,
        onChange
    }
}

export const getColor = (lightMode :boolean,value: number | null): string|null =>{
    if (value !== null) {
        if (value >= 1 && value <= 10) {
            if (lightMode){
                return colorSheet.light_mode.yellow;
            }
            else {
                return colorSheet.dark_mode.yellow;
            }
        } else if (value >= 11 && value <= 20) {
            if (lightMode){
                return colorSheet.light_mode.light_blue;
            }
            else {
                return colorSheet.dark_mode.light_blue;
            }
        } else if (value >= 21 && value <= 30) {
            if (lightMode){
                return colorSheet.light_mode.red;
            }
            else {
                return colorSheet.dark_mode.red;
            }
        } else if (value >= 31 && value <= 40) {
            if (lightMode){
                return colorSheet.light_mode.violet;
            }
            else {
                return colorSheet.dark_mode.violet;
            }
        } else if (value >= 41 && value <= 45) {
            if (lightMode){
                return colorSheet.light_mode.light_green;
            }
            else {
                return colorSheet.dark_mode.light_green;
            }
        }
    }
    return null;
}

