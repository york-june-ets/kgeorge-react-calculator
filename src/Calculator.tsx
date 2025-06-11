import React, {useState} from 'react'

function Calculator() {
    const [formula, setFormula] = useState<string>('');

    const addToFormula = (char: string) => {
        setFormula(formula + char)
    }

    const calculate = () => {
        setFormula(eval(formula))
    }



    return (
        <div id="calculator">
            <div id="screen">{formula}</div>
            <div id="buttons">
                <div id="buttons-grid">
                    <div className="buttons-row">
                        <button id="clear">AC</button> 
                        <button id="divide" onClick={() => addToFormula("/") }>&divide;</button> 
                        <button id="multiply" onClick={() => addToFormula("*")}>x</button>
                    </div>
                    <div className="buttons-row">
                        <button id="7" onClick={() => addToFormula("7")}>7</button> 
                        <button id="8" onClick={() => addToFormula("8")}>8</button> 
                        <button id="9" onClick={() => addToFormula("9")}>9</button>
                    </div>
                    <div className="buttons-row">
                        <button id="4" onClick={() => addToFormula("4")}>4</button> 
                        <button id="5" onClick={() => addToFormula("5")}>5</button> 
                        <button id="6" onClick={() => addToFormula("6")}>6</button>
                    </div>
                    <div className="buttons-row">
                        <button id="1" onClick={() => addToFormula("1")}>1</button> 
                        <button id="2" onClick={() => addToFormula("2")}>2</button> 
                        <button id="3" onClick={() => addToFormula("3")}>3</button>
                    </div>
                    <div className="buttons-row">
                        <button id="." onClick={() => addToFormula(".")}>.</button> 
                        <button id="0" onClick={() => addToFormula("0")}>0</button> 
                        <button id="%" onClick={() => addToFormula("%")}>%</button>
                    </div>
                </div>
                <div id="buttons-sidebar">
                    <button id="delete">&#x2326;</button>
                    <button id="-" onClick={() => addToFormula("-")}>-</button>
                    <button id="+" onClick={() => addToFormula("+")}>+</button>
                    <button id="=" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator