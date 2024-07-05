import {useSelector} from "react-redux";
import {lightModeState} from "../../../Redux/lightMode";

interface StatusData {
    number: number;
    value: number;
}

interface StatusDataWithLightMode{
    statusData: StatusData[];
    lightMode: boolean;
}

interface RangeData{
    name: string;
    value: number;
}

export const getHorizontalBarOption = (statusData: StatusData[]) => {
    return {
        grid:{
            top: 0,
            bottom: 20,
        },
        xAxis: {
            type: 'value',
        },
        yAxis: {
            type: 'category',
            data: statusData.map(data => String(data.number).padStart(2, '0')),
            inverse: true,          //축이 아래쪽이라 위쪽부터 값 시작되도록
            axisLabel: {
                fontSize: 16, // Y축 라벨의 글자 크기를 16px로 설정
            }
        },
        series: [{
            type: 'bar',
            barWidth: 25, // 막대의 너비를 20px로 설정
            data: statusData.map(data => ({
                value: data.value,
                label: {
                    show: true, // 라벨 표시 여부
                    position: 'insideLeft', // 라벨 위치 (막대 그래프의 오른쪽)
                    formatter: '{c}', // 라벨 형식
                    color: 'white',
                },
            })),
            itemStyle: {
                color: '#1F4EF5', // 막대 색상 설정
                emphasis: {
                    color: '#1890ff', // 호버 시 색상을 밝은 파란색으로 변경
                }
            },
        }],
    };
};

// 10 단위별 각 회차 전체 합 구하는 곳
const sumValuesInRange = (data: StatusData[], min: number, max: number): number => {
    return data
        .filter(item => item.number >= min && item.number <= max)
        .reduce((sum, item) => sum + item.value, 0);
};



// 파이 차트 옵션을 반환하는 함수
export const getPieOption =  ({statusData,lightMode} : StatusDataWithLightMode) => {

    const ranges: RangeData[] = [
        { name: '1~10', value: sumValuesInRange(statusData, 1, 10) },
        { name: '11~20', value: sumValuesInRange(statusData, 11, 20) },
        { name: '21~30', value: sumValuesInRange(statusData, 21, 30) },
        { name: '31~40', value: sumValuesInRange(statusData, 31, 40) },
        { name: '41~45', value: sumValuesInRange(statusData, 41, 45) },
    ];

    return {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle:{
                fontSize: '20',
                color: lightMode?'#000000':'#ffffff'
            }
        },
        series: [
            {
                name: '점유율',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: ranges,
            },
        ],
    };
};

interface getDetailPieOptionProps{
    statusData: StatusData[];
    clickedRange: number[]|null;
    lightMode: boolean;
}

//1~10 이런식으로 detail하게 보이는곳
export const getDetailPieOption =  ({statusData,clickedRange, lightMode}: getDetailPieOptionProps) => {
    let startNumber = 1;
    let endNumber = 10;
    if (clickedRange !== null){
        startNumber = clickedRange[0];
        endNumber = clickedRange[1];
    }
    const filteredData = statusData.filter(data => data.number >= startNumber && data.number <= endNumber);

    // 각 숫자에 대한 점유율 데이터 생성
    const dataForPieChart = filteredData.map(data => ({
        value: data.value,
        name: data.number.toString()
    }));

    return {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle:{
                fontSize: '15',
                color: lightMode?'#000000':'#ffffff'
            }
        },
        color: ['#fa5252', '#f76707', '#fcc419', '#82c91e', '#228be6',
            '#4263eb', '#7048e8', '#be4bdb', '#FAEB69', '#12b886',
            '#e03131', '#f59f00'],
        series: [
            {
                name: '점유율',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',

                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: dataForPieChart,
            },
        ],
    };
};