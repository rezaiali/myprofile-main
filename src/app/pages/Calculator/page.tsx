"use client"
import { useState } from 'react'
import '@/app/styles/calculator.css'

export default function Calculator(){

     const [display,setDisplay]=useState("0.");
     const [historydisplay,setHostoryDisplay]=useState("0.");
     const [firstNumber,setFirstNumber]=useState(true);
     const [historyDisplayClassName, setHistoryDisplaylassName] = useState("historyDisplay invisible");


function OnClickbtn (Num:string) {

    switch (Num){
        case "7":
           // eslint-disable-next-line @typescript-eslint/no-unused-expressions
             firstNumber? setDisplay(Num): setDisplay(display+Num);  
             setHostoryDisplay(display);
             setFirstNumber(false);
             setHistoryDisplaylassName("historyDisplay visible");
        break;
        case "+":
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            firstNumber? setDisplay(Num): setDisplay(display+Num); 
            setHostoryDisplay(display+Num); 
            setFirstNumber(false);
            setDisplay("0.")
            setHistoryDisplaylassName("historyDisplay visible");
            break;
        case "C":
            setDisplay("0.");
            setHostoryDisplay("0");
            setHistoryDisplaylassName("historyDisplay invisible");
    }
   

    
   
   
}


    return(
        <>
        
        <div className="calculator">
        <div className={historyDisplayClassName}>{historydisplay}</div>
        <div className="display">{display}</div>
        <div className="buttons">
            
            <button className="btn" onClick={()=>OnClickbtn("7") } >7</button>
            <button className="btn"  onClick={()=>OnClickbtn("8") } >8</button>
            <button className="btn"   onClick={()=>OnClickbtn("9") }>9</button>
            <button className="btn operator" onClick={()=>OnClickbtn("/") }>/</button>
            <button className="btn"   onClick={()=>OnClickbtn("4") }>4</button>
            <button className="btn"  onClick={()=>OnClickbtn("5") }>5</button>
            <button className="btn"  onClick={()=>OnClickbtn("6") }>6</button>
            <button className="btn operator"  onClick={()=>OnClickbtn("*") }>*</button>
            <button className="btn"  onClick={()=>OnClickbtn("1") } >1</button>
            <button className="btn"  onClick={()=>OnClickbtn("2") }>2</button>
            <button className="btn"   onClick={()=>OnClickbtn("3") }>3</button>
            <button className="btn operator" onClick={()=>OnClickbtn("-") }>-</button>
            <button className="btn_big"  onClick={()=>OnClickbtn("0") }>0</button>
            <button className="btn" onClick={()=>OnClickbtn(".") }>.</button>
            <button className="btn operator"onClick={()=>OnClickbtn("+") }>+</button>
            <button className="btn equal"onClick={()=>OnClickbtn("=") }>=</button>
            <button className="btn operator"onClick={()=>OnClickbtn("C") }>C</button>
            </div>
        </div>
      
    </>
    )
}
