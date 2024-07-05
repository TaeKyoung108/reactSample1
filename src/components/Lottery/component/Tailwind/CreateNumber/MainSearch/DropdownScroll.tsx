import {useEffect, useRef, useState} from "react";
import { FaAngleDown } from "react-icons/fa";
interface DropdownScrollProps{
    latestRound: number | null;
    handleDropDownListChangeClick: (index: number)=>void;
}
export const DropdownScroll = ({latestRound, handleDropDownListChangeClick}:DropdownScrollProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // 이건 선택한값이 맨위로
    useEffect(() => {
        if (isDropdownOpen && selectedItemIndex !== null && listRef.current) {
            const itemHeight = 34; // 아이템의 높이를 조정할 필요가 있을 수 있습니다.
            const scrollTop = (selectedItemIndex ) * itemHeight -60; // 선택한 아이템을 중앙에 위치하도록 계산
            listRef.current.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }
    }, [isDropdownOpen, selectedItemIndex]);

    //이건 그냥 전체를 맨위로
    // useEffect(() => {
    //     if (listRef.current && isDropdownOpen) { // 변경된 부분: isDropdownOpen 상태 확인
    //         listRef.current.scrollTo({ top: 0, behavior: 'smooth' }); // 변경된 부분: scrollIntoView -> scrollTo
    //     }
    // }, [isDropdownOpen]);
    const numbers = Array.from({ length: latestRound?latestRound:0 }, (_, index) => index+1).reverse();

    const handleItemClick = (value: number, index: number) => {
        handleDropDownListChangeClick(value);
        setSelectedItemIndex(index);
        setIsDropdownOpen(false); // Close the dropdown after item click
    };

    return (
        <div className="relative flex flex-row">
            <button
                id="dropdownScrollButton"
                onClick={toggleDropdown}
                className={`h-[45px] w-[45px] text-white bg-light_text_sub focus:outline-none rounded-lg text-center inline-flex items-center ml-3`}
            >
                <FaAngleDown size={45} className={`${isDropdownOpen ? 'transform rotate-180' : ''}`}/>
            </button>
            <div
                id="dropdownScroll"
                className={`absolute top-[40px] z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-light_bg rounded-lg shadow w-[150px] ml-3`}
            >
                <ul id="dropdownScrollUl" ref={listRef} className=" h-[150px] w-[150px] py-2 overflow-y-auto text-gray-700 dark:text-gray-200 scrollbar-hide">
                    {numbers.map((value, index) => (
                        <li  key={value}>
                            <button
                                className="w-[150px] h-[34px] flex items-center justify-center hover:bg-light_text_sub"
                                onClick = {() => handleItemClick(value, index)}
                            >
                                {value} 회차
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};