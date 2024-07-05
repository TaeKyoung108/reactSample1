import React, { useState} from 'react';

interface HeaderProps {
    lightMode: boolean;
    detailTabHeaderNumber: number;
    setDetailTabHeaderNumber: React.Dispatch<React.SetStateAction<number>>;
}
interface HeaderButtonProps{
    lightMode: boolean;
    setDetailTabHeaderNumber: React.Dispatch<React.SetStateAction<number>>;
    target: number;
    label: string;
    isSelected: boolean;
}

export const HeaderButton = ({ lightMode ,setDetailTabHeaderNumber,target, label, isSelected}: HeaderButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`h-full w-[30%] font-gmarketSans font-bold text-2xl relative ${lightMode ? 'text-light_bg' : 'text-dark_text_sub'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={()=> {
                setDetailTabHeaderNumber(target)
            }}
        >
            {label}
            { (
                <div className={`h-[5%] w-full absolute bottom-0 left-0 ${lightMode ? 'bg-light_bg' : 'bg-dark_text_sub'}`}
                     key={"detailTab"+target}
                     style={{ width: (isHovered||isSelected) ? '100%' : '0%', transition: 'width 0.5s ease' }}

                ></div>

            )}
        </button>
    );
};
const Header = ({ lightMode, detailTabHeaderNumber, setDetailTabHeaderNumber}: HeaderProps) => {
    return (
        <div className={` h-[120px] w-[580px] font-gmarketSans ${lightMode?'bg-gradient-to-r from-gradient_orange_1 to-gradient_orange_2':'bg-gradient-to-r from-gradient_green_1 to-gradient_green_2'}`}>
            <div className="h-[50%] px w-[90%] flex items-center justify-left pl-10 font-bold text-lg">
                LN
            </div>
            <div className="h-[50%] w-full flex flex-row justify-around items-center">
                <HeaderButton label="번호생성" lightMode={lightMode} isSelected={1===detailTabHeaderNumber} target={1} setDetailTabHeaderNumber={setDetailTabHeaderNumber} />
                <HeaderButton label="회차검색" lightMode={lightMode} isSelected={2===detailTabHeaderNumber} target={2} setDetailTabHeaderNumber={setDetailTabHeaderNumber} />
                <HeaderButton label="번호통계" lightMode={lightMode} isSelected={3===detailTabHeaderNumber} target={3} setDetailTabHeaderNumber={setDetailTabHeaderNumber} />
            </div>
        </div>
    );
};

export default Header;