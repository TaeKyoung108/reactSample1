import TotalPageWrapper, { TabWrapper} from "../../component/StyledComponent/PageWrapper";
import TimeLimitArea from "../../component/EachComponent/TimeLimitArea";
import {HeaderButton} from "../../component/Tailwind/CreateNumber/Header";
import React, {useState} from "react";
import CreateNumber from "../../component/Tailwind/CreateNumber/CreateNumber";
import {useLuckyNumber} from "../../component/CustomHook/LuckyNumber";
import Body from "../../component/Tailwind/CreateNumber/Body";
import {get6Number} from "../../component/CustomHook/RandomNumber";


const CreateNumberMainPage = () => {
    let lightMode = true;
    let isSelected = true;

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
        const newNumbers = get6Number(numberList);

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
            let newNumbers = get6Number(numberList);
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


    return(
        <TotalPageWrapper>
            {/*styledComponent 부분임 */}
            {/*<HeaderWrapper $lightMode={lightMode}>*/}
            {/*    <HeaderLogoProps $lightMode={lightMode}>LN</HeaderLogoProps>*/}
            {/*    <HeaderContentsProps>*/}
            {/*        <HeaderButtonProps $isSelected={isSelected}>번호생성</HeaderButtonProps>*/}
            {/*        <HeaderButtonProps>회차검색</HeaderButtonProps>*/}
            {/*        <HeaderButtonProps>번호통계</HeaderButtonProps>*/}
            {/*    </HeaderContentsProps>*/}
            {/*</HeaderWrapper>*/}

            {/*tailWind Header 부분 그대로 가져온거임 Header 태그 쓴 뒤에 거기서 isSelected 부분 수정해도됨*/}
            <div className={`h-[12%] w-580 font-gmarketSans ${lightMode?'bg-gradient-to-r from-gradient_orange_1 to-gradient_orange_2':'bg-gradient-to-r from-gradient_green_1 to-gradient_green_2'}`}>
                <div className="h-[50%] px w-[90%] flex items-center justify-left pl-10 font-bold text-lg">
                    LN
                </div>
                <div className="h-[50%] w-full flex flex-row justify-around items-center">
                    <HeaderButton label="번호생성" lightMode={lightMode} isSelected={isSelected} />
                    <HeaderButton label="회차검색" lightMode={lightMode} isSelected={!isSelected} />
                    <HeaderButton label="번호통계" lightMode={lightMode} isSelected={!isSelected} />
                </div>
            </div>

            {/*시간 출력 부분 styled-component*/}
            <TimeLimitArea $lightMode={lightMode}></TimeLimitArea>
            {/*그전에 해놨던 임시 블럭*/}
            {/*<CreateNumberWrapper $lightMode={lightMode}>*/}
            {/*    <LuckyNumberProps lightMode={lightMode}></LuckyNumberProps>*/}
            {/*</CreateNumberWrapper>*/}
            <CreateNumber lightMode={lightMode} isManual={isManual} setIsManual={setIsManual} numberList={numberList} handleNumber={handleNumber} onChange={onChange}></CreateNumber>

            <Body lightMode={lightMode} bodyList={bodyList} handleListChangeClick={handleListChangeClick} handleListResetClick={handleListResetClick} handleListChangeAllClick={handleListChangeAllClick}></Body>
            <TabWrapper $lightMode={lightMode}>

            </TabWrapper>
        </TotalPageWrapper>
    )
}

export default CreateNumberMainPage;