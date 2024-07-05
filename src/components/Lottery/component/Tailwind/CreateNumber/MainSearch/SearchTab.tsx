import axios from "axios";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {lightModeState} from "../../../Redux/lightMode";
import LuckyNumberShow from "../../common/molecules/LuckyNumberShow";
import getColorClass from "../../common/molecules/getColorClass";
import {DropdownScroll} from "./DropdownScroll";

interface LottoStatusDto {
    drwNo: number;
    drwNoDate: string;
    totSellamnt: number;
    firstWinamnt: number;
    firstPrzwnerCo: number;
    firstAccumamnt: number;
    drwtNo1: number;
    drwtNo2: number;
    drwtNo3: number;
    drwtNo4: number;
    drwtNo5: number;
    drwtNo6: number;
    bnusNo: number;
}

const SearchTab = () => {
    const lightMode = useSelector((state: lightModeState) => {
        return state.lightMode;
    })

    const [latestRound, setLatestRound] = useState<number>(0);
    const [currentSelectRound, setCurrentSelectRound] = useState<number>(0);
    const [lottoStatus, setLottoStatus] = useState<LottoStatusDto | null>(null);


    const getLatestRound = async (): Promise<number> => {
        try {
            // Axios를 사용하여 GET 요청 보내기
            const response = await axios.get('http://localhost:8080/lotto/getLastRound');

            // 응답 데이터 확인
            // console.log('Response data:', response.data);
            const fetchedData: number = parseInt(response.data);
            return fetchedData;
        } catch (error) {
            // 오류 처리
            console.error('Error fetching data:', error);
            return 0;
        }
    };


    // 데이터 가져오는 부분
    const getDetailData = async (round: number) => {
        try {

            // Axios를 사용하여 GET 요청 보내기
            const response = await axios.get<LottoStatusDto>(`http://localhost:8080/lotto/getRound/${round}`);

            console.log('Response data:', response.data);
            const fetchedData: LottoStatusDto = response.data;

            // 날짜 형식 변환
            const dateObject = new Date(fetchedData.drwNoDate);
            const year = dateObject.getFullYear(); // 년
            const month = dateObject.getMonth() + 1; // 월 (0부터 시작하므로 1을 더함)
            const day = dateObject.getDate(); // 일

            // 변환된 날짜를 LottoStatusDto에 저장
            const updatedData: LottoStatusDto = {
                ...fetchedData,
                drwNoDate: `${year}년 ${month}월 ${day}일`
            };

            setLottoStatus(updatedData);


        } catch (error) {
            // 오류 처리
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        const fetchLatestRoundAndData = async () => {
            try {
                const latestRoundData: number = await getLatestRound();
                setLatestRound(latestRoundData);
                // getDetailData(latestRoundData);
                setCurrentSelectRound(latestRoundData)
            } catch (error) {
                console.error('Error fetching data:', error);
                // 오류 처리
            }
        };

        fetchLatestRoundAndData();
    }, []);

    useEffect(() => {
        const fetchLatestRoundAndData = async () => {
            try {
                getDetailData(currentSelectRound); // 컴포넌트가 처음 렌더링될 때 fetchData 함수를 호출합니다.
            } catch (error) {
                console.error('Error fetching data:', error);
                // 오류 처리
            }
        };

        fetchLatestRoundAndData();
    }, [currentSelectRound]);

    const handleDropDownListChangeClick = (index: number) => {
        if (index>0 && index<=latestRound){
            setCurrentSelectRound(index);
        }
    }

    return (
        <div
            className={`mt-[1px] h-[608px] w-[580px] font-gmarketSans flex flex-col justify-center items-center select-none ${lightMode ? 'bg-light_bg' : 'bg-dark_bg saturate-75'}`}>
            <div className={`mb-[20px] flex flex-row`}>
                <span className={`text-[45px]`}>{lottoStatus?.drwNo} 회차</span>
                <DropdownScroll latestRound={latestRound?latestRound:null} handleDropDownListChangeClick={handleDropDownListChangeClick}></DropdownScroll>
            </div>

            <span className={`mb-[20px] text-[22px]`}>{lottoStatus?.drwNoDate}</span>
            <div
                className={`mt-2 mb-[20px] h-[12%] w-[480px] font-gmarketSans flex flex-row justify-center items-center select-none border-solid border-2 rounded-[40px] ${lightMode ? 'bg-light_bg border-light_bg_sub' : 'bg-dark_bg_sub2 border-dark_bg_sub2'}`}>
                {Array.from({length: 6}, (_, index) => (
                    <div
                        className={`ml-2 h-[40px] w-[40px] rounded-[40px] text-[16px] flex justify-center items-center leading-[36px] outline-none ${lightMode ? 'text-light_bg' : 'text-dark_bg'} ${getColorClass(lightMode, lottoStatus?.[`drwtNo${index + 1}` as keyof LottoStatusDto] as number)}`}>
                        <span className={`leading-[30px] text-[16px] text-center`}>
                            {lottoStatus ? lottoStatus[`drwtNo${index + 1}` as keyof LottoStatusDto] : ''}
                        </span>
                    </div>
                ))}
                <span className={`ml-2 mt-2 text-[35px] text-center block`}>+</span>
                <div
                    className={`ml-2 h-[40px] w-[40px] rounded-[40px] text-[16px] flex justify-center items-center leading-[36px] outline-none ${lightMode ? 'text-light_bg' : 'text-dark_bg'} ${getColorClass(lightMode, lottoStatus?.bnusNo)}`}>
                    <span className={`leading-[30px] text-[16px] text-center`}>
                        {lottoStatus?.bnusNo}
                    </span>
                </div>
            </div>
            <table
                className={`table w-[480px] h-[180px] flex justify-center items-center border-collapse border overflow-hidden text-center rounded-[25px] ${lightMode ? 'outline-light_text_sub' : 'outline-dark_text_sub'}`}>
                <tbody>
                <tr className={`w-[480px] h-[60px] bg-light_text_sub flex flex-row justify-around items-center`}>
                    <td className={`w-[198px] h-[58px] ml-[1px] rounded-tl-[25px] text-[18px] flex justify-center items-center ${lightMode ? 'bg-light_bg_sub' : 'bg-dark_bg_sub'}`}>
                        1등 총 당첨금액
                    </td>
                    <td className={`w-[278px] h-[58px] rounded-tr-[25px] flex justify-end items-center ${lightMode ? 'bg-light_bg' : 'bg-dark_bg_sub'} `}>
                        <span className={` mr-[30px] text-[18px]`}>{lottoStatus?.firstAccumamnt.toLocaleString()} 원</span>
                    </td>
                </tr>
                <tr className={`w-[480px] h-[60px] bg-light_text_sub flex flex-row justify-around items-center`}>
                    <td className={`w-[198px] h-[59px] ml-[1px] text-[18px] flex justify-center items-center ${lightMode ? 'bg-light_bg_sub' : 'bg-dark_bg_sub'}`}>
                        당첨 인원
                    </td>
                    <td className={`w-[278px] h-[59px] flex justify-end items-center ${lightMode ? 'bg-light_bg' : 'bg-dark_bg_sub'} `}>
                        <span className={` mr-[30px] text-[18px]`}>{lottoStatus?.firstPrzwnerCo} 명</span>
                    </td>
                </tr>
                <tr className={`w-[480px] h-[60px] bg-light_text_sub flex flex-row justify-around items-center`}>
                    <td className={`w-[198px] h-[58px] ml-[1px] rounded-bl-[25px] text-[18px] flex justify-center items-center ${lightMode ? 'bg-light_bg_sub' : 'bg-dark_bg_sub'}`}>
                        1인당 당첨 금액
                    </td>
                    <td className={`w-[278px] h-[58px] rounded-br-[25px] flex justify-end items-center ${lightMode ? 'bg-light_bg' : 'bg-dark_bg_sub'} `}>
                        <span className={` mr-[30px] text-[18px]`}>{lottoStatus?.firstWinamnt.toLocaleString()} 원</span>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className={`mt-[40px] w-[480px] h-[120px] flex justify-center items-center flex-col`}>
                <div className={`w-[480px] h-[30px] flex justify-start items-center flex-row`}>
                    <span
                        className={`ml-4 leading-[18px] text-[14px] ${lightMode ? 'text-light_text' : 'text-dark_text'}`}>추첨방송</span>
                    <span
                        className={`ml-4 leading-[18px] text-[14px] ${lightMode ? 'text-gradient_orange_1' : 'text-dark_bg'}`}>매주 토요일 오후9시35분 MBC 방송</span>
                </div>
                <div className={`w-[480px] h-[60px] flex justify-start items-start flex-row`}>
                    <span
                        className={`ml-4 leading-[18px] text-[14px] ${lightMode ? 'text-light_text' : 'text-dark_text'}`}>판매기간</span>
                    <div className={`w-[400px] h-[60px] flex justify-start items-start flex-col`}>
                        <span
                            className={`ml-4 leading-[18px] text-[13px] ${lightMode ? 'text-light_text' : 'text-dark_text'}`}>매일 6시부터 24시까지 판매</span>
                        <span
                            className={`ml-4 leading-[18px] text-[13px] ${lightMode ? 'text-light_text' : 'text-dark_text'}`}>추첨일[토요일]에는 오후 8시에 판매 마감</span>
                        <span
                            className={`ml-4 leading-[18px] text-[13px] ${lightMode ? 'text-light_text' : 'text-dark_text'}`}>추첨일 오후 8시부터 다음날[일요일] 오전 6시까지 판매 정지</span>
                    </div>
                </div>
                <div className={`w-[480px] h-[30px] flex justify-start items-center flex-row`}>
                    <span
                        className={`ml-4 leading-[18px] text-[14px] ${lightMode ? 'text-light_text' : 'text-dark_bg'}`}>지급기한</span>
                    <span
                        className={`ml-4 leading-[18px] text-[14px] ${lightMode ? 'text-light_text' : 'text-dark_bg'}`}>지급 개시일로부터 1년</span>
                </div>
            </div>
        </div>
    )
}

export default SearchTab;