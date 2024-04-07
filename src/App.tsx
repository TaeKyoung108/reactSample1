import React, {Suspense} from 'react';
import './App.css';
import {createGlobalStyle} from "styled-components";
import reset, {Reset} from "styled-reset";
import CreateNumberMainPage from "./components/Lottery/Page/CreateNumber/CreateNumberMainPage";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Lottery/Page/Footer/Footer";

// const GlobalStyle = createGlobalStyle`
//     ${reset}
// `;

function App() {
    const lightMode: boolean = true;
  return (

    <div className="App">
        <div className={` h-[1000px] w-[580px] flex flex-col mt-0`}>
            <Reset/>
            {/*<ToDoPage></ToDoPage>*/}
            {/*<CreateNumberMainPage></CreateNumberMainPage>*/}
            <Suspense fallback={<div>로딩중임</div>}>
                <Routes>
                    <Route path={'/'} element={<CreateNumberMainPage lightMode={lightMode}></CreateNumberMainPage>}/>
                    <Route path={'/saveNumber'} element={<div className={`h-[85%] w-[580px] bg-dark_bg_sub flex items-center justify-center`}>미구현</div>}/>
                    <Route path={'/winningReview'} element={<div className={`h-[85%] w-[580px] bg-dark_bg_sub flex items-center justify-center`}>미구현</div>}/>
                    <Route path={'/myPage'} element={<div className={`h-[85%] w-[580px] bg-dark_bg_sub flex items-center justify-center`}>미구현</div>}/>
                </Routes>
            </Suspense>
            <Footer lightMode={lightMode}></Footer>
        </div>
    </div>
  );
}

export default App;
