import React from "react";
import {LuckyNumberReturn} from "../../CustomHook/LuckyNumber";
import LuckyNumberInput from "../common/molecules/LuckyNumberInput";

interface CreateNumberProps extends LuckyNumberReturn{
    // 다크모드 여부
    lightMode: boolean;
    // 랜덤생성인지 입력인지 true : 직접 입력
    isManual: boolean;
    setIsManual: (newValue: boolean) => void;

}
const CreateNumber = ({ lightMode, isManual,setIsManual, numberList, handleNumber, onChange}: CreateNumberProps) => {
    // const [isDragging, setIsDragging] = useState<boolean>(false);
    // const [startY, setStartY] = useState<number>(0);
    // const [offsetY, setOffsetY] = useState<number>(0);
    //
    // // 드래그 부분 구현하긴했는데 실용적이지 못한거 같아서 일단 안씀
    // useEffect(() => {
    //     const handleMouseMove = (e: MouseEvent) => {
    //         if (isDragging) {
    //             const newOffsetY = e.clientY - startY;
    //             setOffsetY(newOffsetY);
    //         }
    //     };
    //
    //     const handleMouseUp = () => {
    //         setIsDragging(false);
    //         if (offsetY > 0) {
    //             setIsManual(true);
    //         } else if (offsetY < 0) {
    //             setIsManual(false);
    //         }
    //     };
    //
    //     if (isDragging) {
    //         document.addEventListener('mousemove', handleMouseMove);
    //         document.addEventListener('mouseup', handleMouseUp);
    //     }
    //
    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //         document.removeEventListener('mouseup', handleMouseUp);
    //     };
    // }, [isDragging, offsetY, startY, setIsManual]);
    //
    // const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    //     setIsDragging(true);
    //     setStartY(e.clientY);
    //     setOffsetY(0);
    // };


    //reset 버튼
    const resetButtonOnClick = ()=>{
        handleNumber(1,null);
        handleNumber(2,null);
        handleNumber(3,null);
        handleNumber(4,null);
        handleNumber(5,null);
        handleNumber(6,null);
    }


    return (
        <div className={`h-[9%] w-580 font-gmarketSans flex flex-row justify-center items-center select-none ${lightMode?'bg-light_bg':'bg-dark_bg'}`}>
            <div className={`h-[70%] w-[10px] flex flex-col justify-around items-center ${lightMode?'bg-light_bg':'bg-dark_bg'}`}>
                <div className={`h-[40%] w-[5px] rounded ${isManual? lightMode?'bg-gradient_orange_1':'bg-gradient_green_1':'bg-light_text_sub'}`}></div>
                <div className={`h-[40%] w-[5px] rounded ${!isManual?'bg-gradient_orange_1':'bg-light_text_sub'}`}></div>
            </div>
            <div className={`ml-2 h-[70%] w-[85px] flex flex-col justify-center items-center ${lightMode?'text-light_text':'text-dark_text_sub'}`}
                // 드래그 부분 구현하긴했는데 실용적이지 못한거 같아서 일단 안씀
                // onMouseDown={handleMouseDown}
                onClick={()=>setIsManual(!isManual)}
            >
                <span className="h-[45%] w-[100%] text-start text-lg align-middle select-none">{isManual ? "Manual" : "Lucky"}</span>
                <span className="h-[45%] w-[100%] text-start text-lg select-none">Number</span>
            </div>
            {Array.from({ length: 6 }, (_, index) => (
                <LuckyNumberInput
                    key={index}
                    lightMode={lightMode}
                    isManual={isManual}
                    valueNumber={index + 1}
                    numberList={numberList}
                    handleNumber={handleNumber}
                    onChange={onChange}
                />
            ))}

            <button className={`ml-2 h-[35%] w-[10%] rounded-[20px] bg-light_white`}
                onClick={()=>resetButtonOnClick()}>reset</button>
        </div>

    );
};

export default CreateNumber;