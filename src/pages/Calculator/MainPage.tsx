import { useEffect, useState } from "react";
import {Button, MainBox, PickButton, ScreenBox, SubmitButton, Warning} from "../../components/Calculator";
import { BsTrash3 } from "react-icons/bs";


function MainPage(){

    const [count, setCount] = useState<number>(1);
    const [isUnValid,setIsUnValid] = useState<boolean>(false);
    const [history, setHistory] = useState<number[]>([0]);
    function countHandler(){
        setCount(1);
        setHistory([0]);
    }
    function HistoryList(){

        return(
            <>
                <ScreenBox key="a" PastNumber={history[0]} grid="a" fontSize="170px" color="#e68652" isUnValid={isUnValid}/>
                {[1,2,3,4].map((number)=>(
                    <ScreenBox key={number} PastNumber={history[number]} grid={`H${number}`} />
                ))}

            </>

        );
    }
    function HistoryChangeHandler(newNumber: number){

        let copyHistory :number[] = [];
        if(copyHistory.length>5){
            copyHistory = [newNumber,...history];
        }else{
            copyHistory = [newNumber,...history.slice(0,4)];
        }
        setHistory(copyHistory);
    }

    function SubmitHandler(eventCount : number,eventType : string){
        let temp = history[0];
        switch (eventType) {
            case '+':
                temp += eventCount;
                break;
            case '-':
                temp -= eventCount;
                break;
            case '*':
                temp *= eventCount;
                break;
            case '/':
                temp /= eventCount;
                break;
            default:
                break;
        }
        if(temp<=99 && temp>=0){
            HistoryChangeHandler(temp);
        }else{
            setIsUnValid(true);
        }
    }

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setIsUnValid(false)
        }, 1000);

        return ()=>{
            clearTimeout(timer);
        }
    },[isUnValid])


    return(
        <MainBox>
            {/* <Button grid="f" onClick={countHandler} text = {<BsTrash3 size="40" color="#999999" />}></Button>
        <Button grid="g" onClick={countHandler} text = {"+"}></Button>
        <Button grid="h" onClick={countHandler} text = {"-"}></Button> */}
            <HistoryList/>
            <SubmitButton grid="f" onClick={countHandler} text = {<BsTrash3 size="40" color="#999999" />}></SubmitButton>
            <SubmitButton grid="g" onClick={()=>SubmitHandler(count,'+')} text = {"+"}></SubmitButton>
            <SubmitButton grid="h" onClick={()=>SubmitHandler(count,'-')} text = {"-"}></SubmitButton>
            {[1, 2, 3, 4, 5].map((number) => (
                <PickButton
                    key={number}
                    grid={`N${number}`}
                    text={number}
                    isSelected={count === number}
                    onClick={() => setCount(number)}
                />
            ))}
        </MainBox>
    )}

export default MainPage;