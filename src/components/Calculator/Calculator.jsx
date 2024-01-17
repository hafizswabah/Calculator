import React from 'react'
import "./calculator.css"
function Calculator() {
    return (
        <>
        <div className="cal-area">
        <div className="calculator">
            <div className="screen">

            </div>
            <div className="keyboard">
                <div className="layer">
                <button>AC</button>
                <button>%</button>
                <button>$</button>
                <button className='orange-key'>%</button>
                </div>
                <div className="numKeys">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className='orange-key'>*</button>
                </div>
                <div className="numKeys">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className='orange-key'>-</button>
                </div>
                <div className="numKeys">
          
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className='orange-key'>+</button>
                </div>
                <div className="function_Keys">
                <button className='sum'>=</button>
                <button>.</button>
                <button>0</button>
                </div>
        
            </div>
        </div>
        </div>
    
        </>
    )
}

export default Calculator