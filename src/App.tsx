import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/Calculator/MainPage";
import ToDoPage from "./pages/ToDo/ToDoPage";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <ToDoPage></ToDoPage>
    </div>
  );
}

export default App;
