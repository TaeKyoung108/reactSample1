import React, {ChangeEvent, useEffect, useState} from 'react';
import ProgressSelect from "./ProgressSelect";
import IndexSelect from "./IndexSelect";
import {TodoItem} from "../CommonTodo";
import InputComponent from "./TextArea";
import indexSelect from "./IndexSelect";
import ToDoDataList from "./ToDoDataList";
import toDoDataList from "./ToDoDataList";



function TodoListArea(){

    let [idIndex, setIdIndex] = useState<number>(1);
    let [TodoList,SetTodoList] = useState<TodoItem[]>([]);
    let [currentIndex, setCurrentIndex] = useState<number>(0);
    let [maxIndex, setMaxIndex] = useState<number>(0);

    let [progressList, setProgressList] = useState(["전체","진행중","완료"])
    let savedSelectedButton = localStorage.getItem('selectedButton');
    let [selected, setSelected] = useState(savedSelectedButton || "전체");

    // 컴포넌트가 마운트될 때 로컬 스토리지에서 선택된 버튼 상태를 가져오기
    useEffect(() => {
        const savedSelectedButton = localStorage.getItem('selectedButton');
        if (savedSelectedButton) {
            setSelected(savedSelectedButton);
        }
    }, []);

    const getFilteredTodoList = () => {
        switch(selected) {
            case "전체": {
                return TodoList;
            }
            case "진행중": {
                return TodoList.filter(todo => !todo.isDone);
            }
            case "완료": {
                return TodoList.filter(todo => todo.isDone);
            }
            default: {
                return TodoList;
            }
        }
    };

    const handleButtonClick = (buttonName : string) => {
        setSelected(buttonName);
        localStorage.setItem('selectedButton', buttonName);
        setCurrentIndex(0);
    };

    function currentIndexChange(number : number){
        // console.log(currentIndex +" " +number)
        if (number>0 && number<=maxIndex){
            setCurrentIndex(number);
        }
    }

    // function sampleTodo(){
    //     SetTodoList((prevTodos) => [...prevTodos, { id : 1, value: 'New Todo1', color: '#f29b76', isDone: true, creationDate: new Date()}]);
    //     SetTodoList((prevTodos) => [...prevTodos, { id : 2,  value: 'New Todo2', color: '#facd89', isDone: false, creationDate: new Date()}]);
    //     SetTodoList((prevTodos) => [...prevTodos, { id : 3,  value: 'New Todo3', color: '#cce198', isDone: false, creationDate: new Date()}]);
    //     SetTodoList((prevTodos) => [...prevTodos, { id : 4,  value: 'New Todo4', color: '#89c997', isDone: true, creationDate: new Date()}]);
    //     SetTodoList((prevTodos) => [...prevTodos, { id : 5,  value: 'New Todo5', color: '#7ecef4', isDone: false, creationDate: new Date()}]);
    //     SetTodoList((prevTodos) => [...prevTodos, { id : 6,  value: 'New Todo6', color: '#8f82bc', isDone: false, creationDate: new Date()}]);
    //     SetTodoList((prevTodos) => [...prevTodos, { id : 7,  value: 'New Todo7', color: '#c490bf', isDone: true, creationDate: new Date()}]);
    //     SetTodoList((prevTodos) => [...prevTodos, { id : 8,  value: 'New Todo8', color: '#f29c9f', isDone: false, creationDate: new Date()}]);
    //     SetTodoList((prevTodos) => [...prevTodos, { id : 9,  value: 'New Todo9', color: '#f29b76', isDone: false, creationDate: new Date()}]);
    //     setIdIndex(10);
    // }
    // useEffect(() => {
    //     sampleTodo();
    // }, []);

    function updateColorById(targetId : number, newColor :string){
        let updatedList = TodoList.map((todo)=>{
            if (todo.id === targetId){
                return{...todo,color:newColor};
            }
            return todo;
        })

        SetTodoList(updatedList);

    }

    // 데이터 변경시 페이징 처리
    useEffect(() => {
        // console.log(TodoList.length)
        let temp : number;

        switch(selected) {
            case "전체":
                temp = Math.ceil(TodoList.length / 5);
                break;
            case "진행중":
                temp = Math.ceil(TodoList.filter(todo => !todo.isDone).length / 5);
                break;
            case "완료":
                temp = Math.ceil(TodoList.filter(todo => todo.isDone).length / 5);
                break;
            default:
                temp = Math.ceil(TodoList.length / 5);
                break;
        }
        setMaxIndex(temp);
        if (currentIndex == 0 && temp>=1){
            setCurrentIndex(1);
        }
        if (currentIndex>temp && temp>=1){
            setCurrentIndex(1);
        }
    }, [TodoList,selected]);

    //input 입력값 반영 함수
    function newTodoListInput(text :string, color :string){

        SetTodoList((previousTodo)=>[{ id : idIndex,  value: text, color: color, isDone: false, creationDate: new Date()},...previousTodo])
        setIdIndex(idIndex+1);
    }

    //진행중 상태 변경 함수
    function progressChange(targetId :number){
        let updatedList = TodoList.map((todo)=>{
            if (todo.id === targetId){
                return{...todo,isDone :!todo.isDone};
            }
            return todo;
        })

        SetTodoList(updatedList);
    }

    //해당 값 삭제 버튼
    function todoDelete(targetId :number){
        let updatedList = TodoList.filter(todo => todo.id !== targetId);

        SetTodoList(updatedList);
    }


    return(
        <>
            <InputComponent
                $grid = "a"
                placeHolder={"TODO 입력"}
                textInputFunction={newTodoListInput}
            />
            <ProgressSelect progressList={progressList} selected={selected} progressChange={(str)=>handleButtonClick(str)}/>
            <IndexSelect $grid={"c1"} currentIndex={currentIndex} maxIndex={maxIndex} onClick={(number)=>currentIndexChange(number)}/>
            <ToDoDataList $grid={"c2"} TodoList={getFilteredTodoList().slice(Math.max(0,(currentIndex-1)*5), Math.max(0,(currentIndex*5)))} updateColorById={updateColorById} progressChange={progressChange} todoDelete={todoDelete}/>

        </>
    )
}

export default TodoListArea;