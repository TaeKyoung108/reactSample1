import React, {useEffect, useState} from 'react';
import {ClickButton} from "../../Commons/CommonButton";


function ProgressSelect(){

    let [progressList, setProgressList] = useState(["전체","진행중","완료"])
    const savedSelectedButton = localStorage.getItem('selectedButton');
    const [selected, setSelected] = useState(savedSelectedButton || "전체");
    function sample(){

    }

    // 컴포넌트가 마운트될 때 로컬 스토리지에서 선택된 버튼 상태를 가져오기
    useEffect(() => {
        const savedSelectedButton = localStorage.getItem('selectedButton');
        if (savedSelectedButton) {
            setSelected(savedSelectedButton);
        }
    }, []);

    const handleButtonClick = (buttonName : string) => {
        setSelected(buttonName);
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