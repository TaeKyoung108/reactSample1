import {TodoItem} from "../CommonTodo";
import styled from "styled-components";
import {cssGridProps} from "../../Commons/CommonProps";
import React, {useState} from "react";
import {FaCheckSquare, FaTimesCircle} from "react-icons/fa";
import ColorButton from "./ColorButton";

interface ToDoDataListPropsWithCss extends cssGridProps{
    TodoList: TodoItem[];
    updateColorById : (targetId: number, newColor: string) =>void;
    progressChange : (targetId: number) =>void;
    todoDelete : (targetId: number) =>void;
}


const TodoListBoxProps = styled.div<cssGridProps>`
  grid-area: ${(props)=>(props.$grid)};
  border: 0.5px solid #000000;
  border-radius: 20px;
  height: 95%;
  width: 100%;
  background-color: #2A2D3C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${(props)=>props.$marginLeft ? props.$marginLeft : 0};
  padding-top: 10px;
  padding-bottom: 10px;
`;


const TodoListDataProps = styled.div<cssGridProps>`
  grid-area: ${(props)=>(props.$grid)};
  //border: 1px solid #000000;
  border: none;
  border-radius: 5px;
  //height: 15%;
  height: ${(props)=>(props.$isSelected ? "32%" : "15%")};
  width: 90%;
  color: #ffffff;
  background-color: #1B1F2B;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: ${(props)=>props.$marginLeft ? props.$marginLeft : 0};
  margin-top : 10px;
  margin-bottom: 10px;
  
  user-select: none;
  cursor: pointer;
`;


const TodoListMainDataProps = styled.div<cssGridProps>`
  grid-area: ${(props)=>(props.$grid)};
  //border: 1px solid #000000;
  border: none;
  border-radius: 5px;
  //height: 15%;
  position: relative;
  height: ${(props)=>(props.$isSelected ? "70%" : "100%")};
  width: 90%;
  color: #ffffff;
  background-color: #1B1F2B;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${(props)=>props.$marginLeft ? props.$marginLeft : 0};
  
  user-select: none;
  cursor: pointer;
`;

const TodoListSubDataProps = styled.div<cssGridProps>`
  grid-area: ${(props)=>(props.$grid)};
  //border: 1px solid #000000;
  border: none;
  border-radius: 5px;
  //height: 15%;
  height: 20%;
  width: 90%;
  color: #ffffff;
  background-color: #1B1F2B;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${(props)=>props.$marginLeft ? props.$marginLeft : 0};
  
  user-select: none;
`;


const TodoListColorProps = styled.div<cssGridProps>`
  grid-area: ${(props)=>(props.$grid)};
  border: 1px solid #000000;
  //border: none;
  border-radius: 5px;
  height: 80%;
  width: 5px;
  color: ${(props)=>props.$color ? props.$color : "#000000"};
  background-color: ${(props)=>props.$backgroundColor ? props.$backgroundColor : "#ffffff"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props)=>props.$marginLeft ? props.$marginLeft : "20px"};
  margin-right: ${(props)=>props.$marginRight ? props.$marginRight : "20px"};
  margin-top : 0;
`;

function listClickHandle(id: number, selectedTodo: number, setSelectedTodo: React.Dispatch<React.SetStateAction<number>>) {
    if (id === selectedTodo) {
        setSelectedTodo(0);
    } else {
        setSelectedTodo(id);
    }
}
const ListButtonClickArea = styled.div<cssGridProps>`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:first-child {
    margin-bottom: 8px;
  }
`

function ToDoDataList(props :ToDoDataListPropsWithCss){


    const [selectedTodo, setSelectedTodo] = useState<number>(0);
    let [temp, setTemp] = useState<string>("#000000");

    return(
        <TodoListBoxProps $grid={props.$grid}>
            {[...props.TodoList].map((data) => (

                <TodoListDataProps key={"data "+data.id} $isSelected={data.id === selectedTodo}>
                    {data.id == selectedTodo ?
                        <ColorButton color={data.color} $marginTop={"0"} $marginLeft={"30px"} updateColor={((newColor) => props.updateColorById(data.id,newColor))}></ColorButton>
                        : null}
                    <TodoListMainDataProps  onClick={()=>{listClickHandle(data.id, selectedTodo, setSelectedTodo)}} $isSelected={data.id === selectedTodo}>
                        <TodoListColorProps $backgroundColor={data.color}></TodoListColorProps>{data.value}
                        <ListButtonClickArea>
                            <FaCheckSquare color={ data.isDone ? "#FFECDB" :"#56657C"} fontSize={"18px"} onClick={(event)=>{
                                event.stopPropagation();
                                props.progressChange(data.id)}}/>
                            <FaTimesCircle fontSize={"18px"} onClick={(event)=>{
                                event.stopPropagation();
                                props.todoDelete(data.id);
                            }
                            }/>
                        </ListButtonClickArea>
                    </TodoListMainDataProps>
                    {data.id == selectedTodo ?<TodoListSubDataProps $marginLeft={"20px"}>
                        {new Date(data.creationDate).toLocaleDateString("ko-KR")}
                    </TodoListSubDataProps> : null}
                </TodoListDataProps>
            ))}
        </TodoListBoxProps>
    )

}


export default ToDoDataList;