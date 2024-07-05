import {useSelector} from "react-redux";
import {lightModeState} from "../../../Redux/lightMode";
import axios from "axios";
import React, {useEffect, useState} from "react";
import ReactECharts from 'echarts-for-react';
import DropDownMenu from "../../../CustomHook/DropDownMenu";
import { Checkbox } from "@material-tailwind/react";
import {getDetailPieOption, getHorizontalBarOption, getPieOption} from "./getOprions";

interface StatusBodyProps{
    numberStatus: number;
    // changeNumberStatus: (num: number) => void;
}
interface StatusData {
    number: number;
    value: number;
}


export const StatusBody = ({numberStatus}: StatusBodyProps) => {
    const lightMode = useSelector((state :lightModeState)=> {
        return state.lightMode;
    })
    //각 번호별 데이터가 담길 곳
    const [statusData, setStatusData] = useState<StatusData[]>([]);


    // dropdown 메뉴 선택자 1
    const [dropDownTable] = useState<String[]>(['번호순','누적순']);

    // dropdown 메뉴 선택자 2
    const [dropDownSelector,setDropDownSelector] = useState<number>(0);

    // dropdown 메뉴 선택자 3
    const handleDropDownListChangeClick = (index: number) => {
        if (index>=0 && index<dropDownTable.length){
            setDropDownSelector(index);
        }
    }

    // 보너스 번호 포함 관련 체크박스 선택되었는지 확인
    const [isChecked, setIsChecked] = useState(false);

    const sortData =() =>{
        if (dropDownSelector==0){
            const sortedDataByNumber = [...statusData].sort((a, b) => a.number - b.number);
            setStatusData(sortedDataByNumber);
        }
        if (dropDownSelector==1){
            const sortedData = [...statusData].sort((a, b) => b.value - a.value);
            setStatusData(sortedData);
        }
    }

    // 누적순 번호순 선택시 반영되는 곳
    useEffect(()=>{
        sortData()
    },[dropDownSelector])


    // 데이터 가져오는 부분
    const fetchData = async (bonusNumInclude : boolean) => {
        try {
            // 파라미터 객체 생성
            const params = {
                includeBonus: bonusNumInclude // true이면 includeBonus=true, false이면 includeBonus=false
            };

            // Axios를 사용하여 GET 요청 보내기
            const response = await axios.get('http://localhost:8080/lotto/getNumbers', {params});

            // 응답 데이터 확인
            // console.log('Response data:', response.data);

            // 받아온 데이터를 statusData 배열에 추가
            const fetchedData = response.data;
            if (dropDownSelector==0){
                const sortedDataByNumber = [...fetchedData].sort((a, b) => a.number - b.number);
                setStatusData(sortedDataByNumber);
            }
            if (dropDownSelector==1){
                const sortedData = [...fetchedData].sort((a, b) => b.value - a.value);
                setStatusData(sortedData);
            }


        } catch (error) {
            // 오류 처리
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData(false); // 컴포넌트가 처음 렌더링될 때 fetchData 함수를 호출합니다.
    }, []);

    //그래프 부분 정렬때매 구간별 당첨통계 접근시 번호순으로 다시 변경
    useEffect(()=>{
        setDropDownSelector(0);
    },[numberStatus])


    // 1~10 이면 clickedRange[0] = 1 clickedRange[1] = 10
    const [clickedRange, setClickedRange] = useState<number[] | null>(null);
    //showDetail 이 true 면 clickedRange 이용해서 보여줌
    const [showDetail, setShowDetail] = useState<boolean>(false);
    // 클릭 이벤트 핸들러
    const onChartClick = (params: any) => {
        // 클릭된 파이 차트의 정보를 사용하여 자세한 파이 차트 옵션을 가져옵니다.
        if(!showDetail){
            setClickedRange(params.name.split('~').map(Number));
        }
        setShowDetail(!showDetail);

    };





    return(
        <div className={`h-[560px] w-[580px] overflow-y-visible scrollbar-hide overflow-x-hidden ${lightMode?'bg-light_bg':'bg-dark_bg_sub2'}`}>
            <div className={`ml-[10%] w-[80%] h-[50px] flex flex-row items-center justify-around`}>
                <div className={`h-[60%] w-[200px] flex items-center`}>
                    <input type="checkbox"
                           onClick={()=>{
                               fetchData(!isChecked);
                               setIsChecked(!isChecked);
                           }}
                           className="form-checkbox h-5 w-5 text-blue-600"/>
                    <span className={` ml-2 text-lg font-gmarketSans ${lightMode?'text-light_text':'text-dark_text'}`}>보너스 번호 포함</span>

                </div>

                {dropDownTable.map((item, index) => (
                    <button key={index} onClick={() => handleDropDownListChangeClick(index)} className={`${index==dropDownSelector?'bg-light_blue':lightMode?'bg-dark_bg_sub':'bg-dark_bg_sub'} px-4 py-2 bg-blue-500 text-white rounded focus:outline-none`}>
                        {item}
                    </button>
                ))}
                {/*<DropDownMenu dropDownTable={dropDownTable} selector={dropDownSelector}*/}
                {/*              disabled={numberStatus==2}*/}
                {/*              handleListChangeClick={handleDropDownListChangeClick}></DropDownMenu>*/}
            </div>
            <div className={`pt-[20px] pb-[20px] flex flex-col space-y-1 ${lightMode?'bg-light_bg':'bg-dark_button'}`}>


                {numberStatus==1 && <ReactECharts option={getHorizontalBarOption(statusData)}
                                                  style={{
                                                      display: 'flex',
                                                      justifyContent: 'center',
                                                      alignItems: 'center',
                                                      minHeight: '1400px',
                                                      width: '550px',

                                                  }} className={`${lightMode?'bg-light_bg':'bg-dark_button'}`}/>}

                {numberStatus==2 && !showDetail && <ReactECharts
                                                option={getPieOption({statusData, lightMode})}
                                                style={{
                                                  height: '500px',
                                                  width: '100%',

                                                }}
                                                onEvents={{
                                                    'click': onChartClick
                                                }} className={`${lightMode?'text-light_text':'text-dark_text'}`}

                />}
                {numberStatus==2 && showDetail && <ReactECharts option={getDetailPieOption({statusData, clickedRange, lightMode})}
                                                style={{
                                                  height: '500px',
                                                  width: '100%' }}
                                                onEvents={{
                                                    'click': onChartClick
                                                }} className={`${lightMode?'text-light_text':'text-dark_text'}`}
                />}

            </div>
        </div>
    )
}