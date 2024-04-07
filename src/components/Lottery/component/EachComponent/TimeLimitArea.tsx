import styled from "styled-components";
import {newCssGridProps} from "../StyledComponent/newCommonProps";
import colorSheet from "../../../../CommonData/design/colors.json";
import {useEffect, useState} from "react";

interface TimeLimitProps {
    $lightMode :boolean;
}

export const TimeLimitAreaWrapper = styled.div<newCssGridProps>`
    width: 580px;
    height: 88px;
    background-color: ${(props)=>props.$lightMode?colorSheet.light_mode.bg_sub:colorSheet.dark_mode.grey};
    
    margin: 0 0 0 0;
  
    display: flex;
    align-items: center;
`
//몇회차 마감시간 텍스트 부분
export const TimeLimitTextAreaProps = styled.div<newCssGridProps>`
    width: 220px;
    height: 48px;
  
    border: 1px solid ${(props)=>props.$lightMode?colorSheet.light_mode.bg_sub:colorSheet.dark_mode.grey};
    border-radius: 10px;
  
    font-family: 'GmarketSansMedium';
    font-weight: 400;
    font-size: 20px;
    
    color: ${(props)=>props.$lightMode?colorSheet.light_mode.text:colorSheet.dark_mode.black};
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    margin: 0 10px 0 10px;
  
    background-color: ${(props)=>props.$lightMode?colorSheet.light_mode.bg:colorSheet.dark_mode.bg_sub};
`

//각 시간파트별 시간정보 + 설명정보 wrapper
export const TimeLimitTimeAreaPropsWrapper = styled.div<newCssGridProps>`
    width: 70px;
    height: 48px;
  
    font-family: 'GmarketSansMedium';
    font-weight: 400;
    font-size: 20px;
  
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  
    margin: 0 3px 0 3px;

  background-color: ${(props)=>props.$lightMode?colorSheet.light_mode.bg_sub:colorSheet.dark_mode.grey};
`

//day 부분은 한칸이라서 ㅜㅜ
export const TimeLimitTimeAreaPropsWrapper2 = styled.div<newCssGridProps>`
    width: 28px;
    height: 48px;
  
    font-family: 'GmarketSansMedium';
    font-weight: 400;
    font-size: 20px;
  
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  
    margin: 0 3px 0 10px;

  background-color: ${(props)=>props.$lightMode?colorSheet.light_mode.bg_sub:colorSheet.dark_mode.grey};
`
//날짜시간정보등 텍스트 설명 부분 day, hour, min, sec
export const TimeLimitTextAreaProps2 = styled.div<newCssGridProps>`
    width: 60px;
    height: 16px;
  
    //border: 1px solid ${(props)=>props.$lightMode?colorSheet.light_mode.bg_sub:colorSheet.dark_mode.grey};
    border-radius: 5px;
  
    font-family: 'GmarketSansMedium';
    font-weight: 400;
    font-size: 12px;
    color: ${(props)=>props.$lightMode?colorSheet.light_mode.text:colorSheet.dark_mode.white};
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    margin: 1px 10px 0 10px;

    background-color: ${(props)=>props.$lightMode?colorSheet.light_mode.bg_sub:colorSheet.dark_mode.grey};
`

//시간별 각 칸
export const TimeLimitTimeAreaProps = styled.div<newCssGridProps>`
    width: 28px;
    height: 48px;

    // border: 1px solid ${(props)=>props.$lightMode?colorSheet.light_mode.bg_sub:colorSheet.dark_mode.grey};
    border-radius: 5px;
  
    font-family: 'GmarketSansMedium';
    font-weight: 400;
    font-size: 20px;
    color: ${(props)=>props.$lightMode?colorSheet.light_mode.text:colorSheet.dark_mode.black};
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    margin: 0 2px 0 2px;
  
    background-color: ${(props)=>props.$lightMode?colorSheet.light_mode.bg:colorSheet.dark_mode.bg_sub};
`
// : 부분
export const TimeLimitTimeAreaProps2 = styled.div<newCssGridProps>`
    width: 10px;
    height: 48px;
  
    font-family: 'GmarketSansMedium';
    font-weight: 400;
    font-size: 20px;

    color: ${(props)=>props.$lightMode?colorSheet.light_mode.black:colorSheet.dark_mode.white};
    display: flex;
    align-items: center;
    justify-content: center;
  
    margin: 0 5px 0 5px;
  
    //background-color: ${(props)=>props.$lightMode?colorSheet.light_mode.bg:colorSheet.dark_mode.white};
`

//시간 계산 부분
const calculateRemainingTime = () => {
    const currentDate = new Date();
    const nextSaturday = new Date();

    let dayOfWeek = currentDate.getDay();
    //오늘이 토요일이 아니라면
    if (dayOfWeek !== 6) {
        const diff = 6 - dayOfWeek;
        nextSaturday.setDate(currentDate.getDate() + diff);
    } else {
        //토요일이면 그냥 7더함
        nextSaturday.setDate(currentDate.getDate() + 7);
    }
    //오후 8시로 맞춤
    nextSaturday.setHours(20, 0, 0, 0);

    const timeDiff = nextSaturday.getTime() - currentDate.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
};

//시간 출력부분 함수로 묶음
const TimePartFunc = (value: number, unit: string, $lightMode: boolean) => (
    <>
        <TimeLimitTimeAreaProps2 $lightMode={$lightMode}>:</TimeLimitTimeAreaProps2>
        <TimeLimitTimeAreaPropsWrapper $lightMode={$lightMode}>
            <TimeLimitTimeAreaProps $lightMode={$lightMode}>{Math.floor(value / 10)}</TimeLimitTimeAreaProps>
            <TimeLimitTimeAreaProps $lightMode={$lightMode}>{value % 10}</TimeLimitTimeAreaProps>
            <TimeLimitTextAreaProps2 $lightMode={$lightMode}>{unit}</TimeLimitTextAreaProps2>
        </TimeLimitTimeAreaPropsWrapper>
    </>
);


const TimeLimitArea = ({$lightMode} : TimeLimitProps) => {

    const [remainingTime, setRemainingTime] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {

            setRemainingTime(calculateRemainingTime());
        }, 1000);

        setRemainingTime(calculateRemainingTime());

        return () => clearInterval(intervalId);
    }, []);
    return(
        <TimeLimitAreaWrapper $lightMode={$lightMode}>
            <TimeLimitTextAreaProps $lightMode={$lightMode}>1302회차 마감 시간</TimeLimitTextAreaProps>
            <TimeLimitTimeAreaPropsWrapper2 $lightMode={$lightMode}>
                <TimeLimitTimeAreaProps $lightMode={$lightMode}>{remainingTime.days}</TimeLimitTimeAreaProps>
                <TimeLimitTextAreaProps2 $lightMode={$lightMode}>Day</TimeLimitTextAreaProps2>
            </TimeLimitTimeAreaPropsWrapper2>
            {TimePartFunc(remainingTime.hours, "Hour", $lightMode)}
            {TimePartFunc(remainingTime.minutes, "Min", $lightMode)}
            {TimePartFunc(remainingTime.seconds, "Sec", $lightMode)}
        </TimeLimitAreaWrapper>
    )
}

export default TimeLimitArea;