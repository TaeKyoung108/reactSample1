import React from 'react';
import './App.css';
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import CreateNumberMainPage from "./components/Lottery/Page/CreateNumber/CreateNumberMainPage";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        {/*<ToDoPage></ToDoPage>*/}
        <CreateNumberMainPage></CreateNumberMainPage>
    </div>
  );
}

export default App;
