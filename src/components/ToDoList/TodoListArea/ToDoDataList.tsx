import {TodoItem} from "../CommonTodo";

interface ToDoDataListProps {
    TodoList: TodoItem[];
}

function ToDoDataList(props :ToDoDataListProps){

    return(
        <div>
            {[...props.TodoList].map((data) => (
                <div>{data.value}</div>
            ))}
        </div>
    )

}


export default ToDoDataList;