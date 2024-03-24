import React, {useEffect, useState} from 'react';
import {ClickButton} from "../../Commons/CommonButton";

interface ProgressSelectProps{
    progressList : string[];
    selected : string;
    progressChange : (str : string) => void;
}

function ProgressSelect({progressList, progressChange, selected} : ProgressSelectProps){


    const handleButtonClick = (buttonName : string) => {
        progressChange(buttonName);
        localStorage.setItem('selectedButton', buttonName);
    };

    return(
        <>
            {[...progressList].map((buttonName: string, index: number) => (
                <ClickButton key={index} onClick={() => handleButtonClick(buttonName)} value={buttonName}
                             $isSelected={buttonName === selected} $grid={`b${index+1}`}></ClickButton>
            ))}
        </>
    )
}

export default ProgressSelect;