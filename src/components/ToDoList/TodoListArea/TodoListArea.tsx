import React, {ChangeEvent, useEffect, useState} from 'react';
import ProgressSelect from "./ProgressSelect";
import IndexSelect from "./IndexSelect";
import ToDoDataList from "./ToDoDataList";
import {TodoItem} from "../CommonTodo";
import InputComponent from "./TextArea";



function TodoListArea(){


    let [TodoList,SetTodoList] = useState<TodoItem[]>([]);

    function sampleTodo(){
        SetTodoList((prevTodos) => [...prevTodos, { value: 'New Todo1', color: '#000000', isDone: true, creationDate: new Date()}]);
        SetTodoList((prevTodos) => [...prevTodos, { value: 'New Todo2', color: '#000000', isDone: false, creationDate: new Date()}]);
        SetTodoList((prevTodos) => [...prevTodos, { value: 'New Todo3', color: '#000000', isDone: false, creationDate: new Date()}]);
    }
    useEffect(() => {
        sampleTodo();
    }, []);


    return(
        <>
            <InputComponent
                $grid = "a"
                placeHolder={"TODO 입력"}
            />
            <ProgressSelect/>
            <IndexSelect/>
            {/*<ToDoDataList TodoList={TodoList} />*/}

        </>
    )
}

export default TodoListArea;