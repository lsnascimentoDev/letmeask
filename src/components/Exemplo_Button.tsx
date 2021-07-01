import { useState } from "react";

type Buttonprops = {
 nome?: string;
  children?: string;
}

export function Button(props : Buttonprops){
  //let counter = 0;

  const [counter, setCounter] = useState(0);

  function increment(){
    //counter ++;
    setCounter(counter + 1);
    console.log(counter);

  }
  return(
   // <button>{props.children || 'Default'}</button>
   <button onClick={increment}>{counter}</button>
    )
}

