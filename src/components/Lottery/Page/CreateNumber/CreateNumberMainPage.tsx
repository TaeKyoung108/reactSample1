import TimeLimitArea from "../../component/EachComponent/TimeLimitArea";
import Header from "../../component/Tailwind/CreateNumber/Header";
import React, {useEffect, useState} from "react";
import CreateNumber from "../../component/Tailwind/CreateNumber/CreateNumber";
import {useLuckyNumber} from "../../component/CustomHook/LuckyNumber";
import CreateNumberMainBody from "../../component/Tailwind/CreateNumber/CreateNumberMainBody";
import {getRandomNumber} from "../../component/CustomHook/RandomNumber";
import {useDispatch, useSelector} from "react-redux";
import {changeLightMode, lightModeState} from "../../component/Redux/lightMode";
import {StatusTab} from "../../component/Tailwind/CreateNumber/NumberStatus/StatusTab";
import {StatusBody} from "../../component/Tailwind/CreateNumber/NumberStatus/StatusBody";
import SearchTab from "../../component/Tailwind/CreateNumber/MainSearch/SearchTab";


/**
 * 로또 숫자 랜덤으로 생성하는 페이지
 * @constructor
 */
const CreateNumberMainPage = () => {
    const lightMode = useSelector((state :lightModeState)=> {
        return state.lightMode;
    })

    //isManual : 직접 입력하는지 -> 기본은 랜덤
    let [isManual,setIsManual] = useState<boolean>(false);

    const { numberList, handleNumber, onChange } = useLuckyNumber();

    const initialNumberList:{
        value1: number | null;
        value2: number | null;
        value3: number | null;
        value4: number | null;
        value5: number | null;
        value6: number | null;
    } = {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: null,
        value6: null,
    };

    const initialLists = Array.from({ length: 5 }, () => ({ ...initialNumberList }));

    const [bodyList, setBodyList] = useState(initialLists);

    const handleListChangeClick = (index: number): void => {
        // get6Numbers 함수를 사용하여 새로운 숫자 리스트 생성
        const newNumbers = getRandomNumber().get6Number(numberList);

        // bodyList를 복사하여 변경된 요소를 삽입하여 새로운 bodyList 생성
        const newBodyList = [...bodyList];
        newBodyList[index] = {
            value1: newNumbers[0],
            value2: newNumbers[1],
            value3: newNumbers[2],
            value4: newNumbers[3],
            value5: newNumbers[4],
            value6: newNumbers[5],
        };

        // 변경된 bodyList를 상태에 반영
        setBodyList(newBodyList);
    }

    const handleListResetClick = () => {
        setBodyList(initialLists);
    }

    const handleListChangeAllClick = () => {
        const newBodyList = [...initialLists];
        for(let i =0; i<5; i++){
            let newNumbers = getRandomNumber().get6Number(numberList);
            newBodyList[i] = {
                value1: newNumbers[0],
                value2: newNumbers[1],
                value3: newNumbers[2],
                value4: newNumbers[3],
                value5: newNumbers[4],
                value6: newNumbers[5],
            };
        }

        setBodyList(newBodyList);
    }

    // Header 통해서 볼 수 있는 탭 1->번호생성(default) 2->회차검색 3->번호통계
    const [detailTabHeaderNumber,setDetailTabHeaderNumber] = useState<number>(1);

    // 번호통계에서 볼 수 있는 탭 1-> 번호별 당첨 통계 2-> 구간별 당첨 통계
    const [numberStatus,setNumberStatus] = useState<number>(1);
    const changeNumberStatus = (num : number) => {
        if (num == 1){
            setNumberStatus(1)
        }
        else if (num == 2){
            setNumberStatus(2)
        }else {
            return;
        }
    }

    return(
        <div className={`h-[900px] w-[580px]`}>

            <Header lightMode={lightMode} detailTabHeaderNumber={detailTabHeaderNumber} setDetailTabHeaderNumber={setDetailTabHeaderNumber}></Header>
            <TimeLimitArea $lightMode={lightMode}></TimeLimitArea>
            <CreateNumber lightMode={lightMode} isManual={isManual} setIsManual={setIsManual} numberList={numberList} handleNumber={handleNumber} onChange={onChange}></CreateNumber>

            {detailTabHeaderNumber === 1 && (
                <>
                    {/*시간 출력 부분 styled-component*/}
                    <CreateNumberMainBody lightMode={lightMode} bodyList={bodyList} handleListChangeClick={handleListChangeClick} handleListResetClick={handleListResetClick} handleListChangeAllClick={handleListChangeAllClick}></CreateNumberMainBody>
                </>
            )}
            {detailTabHeaderNumber ===2 &&(
                <>
                    <SearchTab></SearchTab>
                </>
            )}
            {detailTabHeaderNumber === 3 && (
                <>
                    <StatusTab numberStatus={numberStatus} changeNumberStatus={changeNumberStatus}></StatusTab>
                    <StatusBody numberStatus={numberStatus}></StatusBody>
                </>
            )}


        </div>
    )
}

export default CreateNumberMainPage;