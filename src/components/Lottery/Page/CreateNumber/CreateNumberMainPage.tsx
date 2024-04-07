import TimeLimitArea from "../../component/EachComponent/TimeLimitArea";
import Header from "../../component/Tailwind/CreateNumber/Header";
import React, {useState} from "react";
import CreateNumber from "../../component/Tailwind/CreateNumber/CreateNumber";
import {useLuckyNumber} from "../../component/CustomHook/LuckyNumber";
import Body from "../../component/Tailwind/CreateNumber/Body";
import {getRandomNumber} from "../../component/CustomHook/RandomNumber";

interface CreateNumberMainPageProps {
    lightMode: boolean
}

/**
 * 로또 숫자 랜덤으로 생성하는 페이지
 * @constructor
 */
const CreateNumberMainPage = ({lightMode}: CreateNumberMainPageProps) => {

    //isManual : 직접 입력하는지
    let [isManual,setIsManual] = useState<boolean>(true);

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


    return(
        <div className={`h-[85%] w-[580px]`}>

            <Header lightMode={lightMode} detailTabHeaderNumber={detailTabHeaderNumber} setDetailTabHeaderNumber={setDetailTabHeaderNumber}></Header>

            {/*시간 출력 부분 styled-component*/}
            <TimeLimitArea $lightMode={lightMode}></TimeLimitArea>
            {/*그전에 해놨던 임시 블럭*/}
            {/*<CreateNumberWrapper $lightMode={lightMode}>*/}
            {/*    <LuckyNumberProps lightMode={lightMode}></LuckyNumberProps>*/}
            {/*</CreateNumberWrapper>*/}
            <CreateNumber lightMode={lightMode} isManual={isManual} setIsManual={setIsManual} numberList={numberList} handleNumber={handleNumber} onChange={onChange}></CreateNumber>

            <Body lightMode={lightMode} bodyList={bodyList} handleListChangeClick={handleListChangeClick} handleListResetClick={handleListResetClick} handleListChangeAllClick={handleListChangeAllClick}></Body>
        </div>
    )
}

export default CreateNumberMainPage;