import React, { useState } from 'react'
import style from './bus.module.css'
import useCounter from '../customHooks/useCounter';

const Bus = () => {
  let {count,handleCount} = useCounter(1);
  const times = 5 + 12;
  // const myStacks = [
  //   "HTML",
  //   "CSS",
  //   "JAVASCRIPT",
  //   "TYPESCRIPT",
  //   "NODE JS",
  //   "PYTHON",
  //   "C++",
  //   "DART",
  //   "REACT"
  // ];
  const [myStacks,setMyStack] = useState(
    [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "NODE JS",
        "PYTHON",
        "C++",
        "DART",
        "REACT"
      ]
  )
  function handleStack(id) {
    let upd = myStacks.filter((each,i)=> {
      if(i!==id) {
         return each;
      }
    });
    setMyStack(upd);
  }
  return (
    <div>
       <h1>App {count} </h1>
      <p className='font-Lato ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus necessitatibus consequuntur quod rerum unde soluta accusantium delectus, architecto qui ipsam! Magnam sequi voluptatum nisi optio a temporibus. Totam, consequuntur perspiciatis.</p>
      <img src="/vite.svg" alt="vite logo" />
      <h2 className='RedMe' > React is {times} times {times> 10? "better": "preferable"} with JSX </h2>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <button className={style.btn} >Buy Me</button>
        <br />
        <button onClick={()=> handleCount('+') } > Count ++ </button> 
        {/* lis */}
        <h3>My Stacks are:</h3>
        <ul>
          {/* <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li> */}
          {
            myStacks.map((stack,i)=> (
              <li onDoubleClick={()=> handleStack(i) } key={i} > {i+1}. {stack} </li>
            ) )
          }
        </ul>
    </div>
  )
}

export default Bus