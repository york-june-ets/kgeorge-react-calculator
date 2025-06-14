import React, {useState} from 'react'
import './Calculator.css';

function Calculator() {
    const [formula, setFormula] = useState<string>('');

    const addToFormula = (char: string): void => {
        setFormula(formula + char)
    }

    const backspace = (): void => {
        setFormula(formula.slice(0, -1))
    }

    const calculate = (): void => {
        try {
            setFormula(eval(formula).toString())
        } catch (err) {
            console.log(err)
        }
    }

    const clear = (): void => {
        setFormula('')
    }


    return (
        <div id="calculator">
            <div id="screen">{formula}</div>
            <div id="buttons">
                <div id="buttons-grid">
                    <div className="buttons-row">
                        <button id="clear" onClick={clear}>AC</button> 
                        <button id="divide" onClick={() => addToFormula("/") }>&divide;</button> 
                        <button id="multiply" onClick={() => addToFormula("*")}>x</button>
                    </div>
                    <div className="buttons-row">
                        <button id="seven" onClick={() => addToFormula("7")}>7</button> 
                        <button id="eight" onClick={() => addToFormula("8")}>8</button> 
                        <button id="nine" onClick={() => addToFormula("9")}>9</button>
                    </div>
                    <div className="buttons-row">
                        <button id="four" onClick={() => addToFormula("4")}>4</button> 
                        <button id="five" onClick={() => addToFormula("5")}>5</button> 
                        <button id="six" onClick={() => addToFormula("6")}>6</button>
                    </div>
                    <div className="buttons-row">
                        <button id="one" onClick={() => addToFormula("1")}>1</button> 
                        <button id="two" onClick={() => addToFormula("2")}>2</button> 
                        <button id="three" onClick={() => addToFormula("3")}>3</button>
                    </div>
                    <div className="buttons-row">
                        <button id="decimal" onClick={() => addToFormula(".")}>.</button> 
                        <button id="zero" onClick={() => addToFormula("0")}>0</button> 
                        <button id="mod" onClick={() => addToFormula("%")}>%</button>
                    </div>
                </div>
                <div id="buttons-sidebar">
                    <button id="delete" onClick={backspace}>&#x2326;</button>
                    <button id="minus" onClick={() => addToFormula("-")}>-</button>
                    <button id="plus" onClick={() => addToFormula("+")}>+</button>
                    <button id="equals" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator