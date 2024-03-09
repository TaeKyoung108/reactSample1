import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/Calculator/MainPage";
import ToDoPage from "./pages/ToDo/ToDoPage";

function App() {
  return (
    <div className="App">
        {/*<MainPage></MainPage>*/}
        <ToDoPage></ToDoPage>
    </div>
  );
}

export default App;
