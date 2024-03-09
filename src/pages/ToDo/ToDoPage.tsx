import {MainBox, StyledHeaderProps, TodoListArea} from "../../components/ToDoList";
import React, {useState} from "react";
import ProgressSelect from "../../components/ToDoList/TodoListArea/ProgressSelect";


function ToDoPage(){

    return(
        <MainBox>
            <StyledHeaderProps $grid={"HD"} value={"TODO LIST"}></StyledHeaderProps>
            <TodoListArea></TodoListArea>
        </MainBox>
    )
}

export default ToDoPage;