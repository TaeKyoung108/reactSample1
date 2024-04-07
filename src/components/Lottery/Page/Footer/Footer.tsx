import {NavLink, useLocation} from "react-router-dom";
import {
    PiBookmarkSimple,
    PiBookmarkSimpleFill,
    PiNotePencil,
    PiNotePencilFill,
    PiNumberCircleSeven,
    PiNumberCircleSevenFill, PiUserCircle, PiUserCircleFill
} from "react-icons/pi";

interface FooterProps{
    lightMode: boolean;
}

interface CreateNumberProps extends FooterProps{
    isSelected: boolean;
}

const CreateNumber = ({lightMode, isSelected}: CreateNumberProps) => {
    return(
        <NavLink className={`h-[100%] w-[15%] flex flex-col justify-center items-center text-[40px] ${isSelected?'text-gradient_orange_1':lightMode?'text-light_text':'text-dark_text'}`} to={"/"}>
            {isSelected? <PiNumberCircleSevenFill/> : <PiNumberCircleSeven/>}
            <span className={`mt-1 font-gmarketSans text-sm`}>번호생성</span>
        </NavLink>
    )
}
const SaveNumber = ({lightMode, isSelected}: CreateNumberProps) => {
    return(
        <NavLink className={`h-[100%] w-[15%] flex flex-col justify-center items-center text-[40px] ${isSelected?'text-gradient_orange_1':lightMode?'text-light_text':'text-dark_text'}`} to={"/saveNumber"}>
            {isSelected? <PiBookmarkSimpleFill/> : <PiBookmarkSimple/>}
            <span className={`mt-1 font-gmarketSans text-sm`}>번호생성</span>
        </NavLink>
    )
}
const WinningReview = ({lightMode, isSelected}: CreateNumberProps) => {
    return(
        <NavLink className={`h-[100%] w-[15%] flex flex-col justify-center items-center text-[40px] ${isSelected?'text-gradient_orange_1':lightMode?'text-light_text':'text-dark_text'}`} to={"/winningReview"}>
            {isSelected? <PiNotePencilFill/> : <PiNotePencil/>}
            <span className={`mt-1 font-gmarketSans text-sm`}>당첨후기</span>
        </NavLink>
    )
}
const MyPage = ({lightMode, isSelected}: CreateNumberProps) => {
    return(
        <NavLink className={`h-[100%] w-[15%] flex flex-col justify-center items-center text-[40px] ${isSelected?'text-gradient_orange_1':lightMode?'text-light_text':'text-dark_text'}`} to={"/myPage"}>
            {isSelected? <PiUserCircleFill/> : <PiUserCircle/>}
            <span className={`mt-1 font-gmarketSans text-sm`}>마이페이지</span>
        </NavLink>
    )
}

const Footer = ({lightMode}:FooterProps) => {
    const location = useLocation();
    return (
        <div className={`h-[10%] w-[580px] flex flex-row justify-around ${lightMode?'bg-light_bg':'bg-dark_bg'}`}>
            <CreateNumber lightMode={lightMode} isSelected={location.pathname === "/"}/>
            <SaveNumber lightMode={lightMode} isSelected={location.pathname === "/saveNumber"}/>
            <WinningReview lightMode={lightMode} isSelected={location.pathname === "/winningReview"}/>
            <MyPage lightMode={lightMode} isSelected={location.pathname === "/myPage"}/>
        </div>
    )
}

export default Footer;