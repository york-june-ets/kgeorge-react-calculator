function Calculator() {



    return (
        <div id="calculator">
            <div id="screen"></div>
            <div id="buttons">
                <div id="buttons-grid">
                    <div className="buttons-row">
                        <button id="clear">AC</button> 
                        <button id="divide">&divide;</button> 
                        <button id="multiply">x</button>
                    </div>
                    <div className="buttons-row">
                        <button id="7">7</button> 
                        <button id="8">8</button> 
                        <button id="9">9</button>
                    </div>
                    <div className="buttons-row">
                        <button id="4">4</button> 
                        <button id="5">5</button> 
                        <button id="6">6</button>
                    </div>
                    <div className="buttons-row">
                        <button id="1">1</button> 
                        <button id="2">2</button> 
                        <button id="3">3</button>
                    </div>
                    <div className="buttons-row">
                        <button id=".">.</button> 
                        <button id="0">0</button> 
                        <button id="%">%</button>
                    </div>
                </div>
                <div id="buttons-sidebar">
                    <button id="delete">&#x2326;</button>
                    <button id="-">-</button>
                    <button id="+">+</button>
                    <button id="=">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator