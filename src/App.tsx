import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import Button from "./components/Button/Button";
import Layout from "./layout/Layout";
import {duration} from "./Constanats";
import {HistoryItem} from "./Types";

function App() {
    const [expression, setExpression] = useState<string>("");
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [showHistory, setShowHistory] = useState<boolean>(false);
    const calculate = () => {
        console.log(expression);
        try {
            if(expression && expression.match(/[^0-9]/gi)) {
                if (!lastCharIsSign(expression)) {
                    let result = eval(expression.slice(0, expression.length-1).replaceAll("×", "*").replaceAll(',','.'));
                    setHistory((prevState):HistoryItem[]=> [...prevState, {expression: expression.slice(0, expression.length-1), result:result}]);
                    setExpression(result);
                } else {
                    let result = eval(expression.replaceAll("×", "*").replaceAll(',','.'));
                    setHistory((prevState):HistoryItem[]=> [...prevState, {expression: expression, result:result}]);
                    setExpression(result);
                }
            }
        } catch (e) {
            return NaN
        }
    }

    const onClickHistory = (index:number):void => {
        let exp = history[index];
        setShowHistory(false);
        setExpression(exp.result);
        setHistory(history.sort((a, b)=> b.expression == exp.expression? -1: 1));
    }

    useEffect(()=> {
        if (showNotification) setTimeout(()=> {
            setShowNotification(false);
        }, duration)
    }, [showNotification])

    const copyHandler = () => {
        navigator.clipboard.writeText(expression);
        setShowNotification(true);
    };
    const lastCharIsSign = (str:  string) => {
        let array = str.toString().slice(-1).match(/[-|+|\/|×]/gi);
        return !(Boolean)(array && array.length);
    }
    const addOperation = (operation: string) => {
        if (lastCharIsSign(expression)) {
            setExpression((prevState)=> prevState + operation);
        } else {
            setExpression((prevState)=> prevState.slice(0, prevState.length - 1) + operation);
        }
    };
    const resetHandler = ()=> setExpression("");
    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key.match(/[0-9]|\.|,/gi)) {
            setExpression((prevState)=> prevState+e.key)
            return;
        }
        switch (e.key) {
            case "Backspace":
                setExpression((prevState)=> prevState.length? prevState.slice(0, -1):"");
                break;
            case "Enter":
                calculate();
                break;
            case "Delete":
                resetHandler();
                break;
            case "+":
                addOperation("+")
                break;
            case "-":
                addOperation("-")
                break;
            case "*":
                addOperation("×")
                break;
            case "/":
                addOperation("/")
                break;
        }
    }
    useEffect(()=> {
        window.addEventListener('keydown', handleKeyPress);
        return ()=> window.removeEventListener('keydown', handleKeyPress);
    })
    return (
        <Layout onClickHistory={onClickHistory}
                duration={duration}
                history={history}
                value={expression}
                setShowHistory={setShowHistory}
                showHistory={showHistory}
                copyHandler={copyHandler}
                showNotification={showNotification}
        >
            <Button color="white" size="m">/</Button>
            <Button color="white" size="m">%</Button>
            <Button color="white" size="m" onClick={()=> addOperation("/")}>/</Button>
            <Button color="white" size="m" onClick={()=> addOperation("-")}>—</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '7')}>7</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '8')}>8</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '9')}>9</Button>
            <Button color="grey" size="m" onClick={()=> addOperation("×")}>×</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '4')}>4</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '5')}>5</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '6')}>6</Button>
            <Button color="grey" size="m" onClick={()=> addOperation("+")}>+</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '1')}>1</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '2')}>2</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '3')}>3</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '0')}>0</Button>
            <Button color="grey" size="m" onClick={()=> setExpression((ps)=> ps + '.')}>.</Button>
            <Button color="grey" size="m" onClick={resetHandler}>AC</Button>
            <Button color="purple" size="l" onClick={calculate}>=</Button>
        </Layout>
    );
}

export default App;
