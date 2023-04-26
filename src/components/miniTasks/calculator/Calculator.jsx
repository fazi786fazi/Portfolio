import React from 'react'
import { useState } from 'react'
import{inputButton} from "./calculatorValues"
const Calculator = () => {
const [result , setResult]= useState(``);
const clickhandle=(e)=>{
    setResult(result.concat(e.target.value))
}
const Calculator =()=>{
    setResult(eval(result).toString())
}
const clear=()=>{
    setResult("")
}
const backSpace=()=>{
    setResult(result.substr(0, result.length - 1))
}
const keyhandler =(e)=>{
    let key=e.keyCode;
    console.info( key );

}
  return (
    <>
    <input type="text" placeholder='0' value={result} onClick={keyhandler}/>
    <div>
      {
       inputButton.map((item=>{
        return(
            <>
            <input type={item.type} value={item.value} placeholder={item.placeholder} onClick={clickhandle} />
            </>
        )
       }))
      }
    </div>
    <div>
    <input type="button" value="⌫" onClick={backSpace}/>
        <input type="button" value="Clear" onClick={clear}/>
        <input type="button" value="=" onClick={Calculator}/>
    </div>
    </>
  )
}

export default Calculator
