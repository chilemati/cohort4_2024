import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import { cartAtom } from '../atoms/cart';
import useCounter from '../customHooks/useCounter';

const Counter = () => {
    // const [b,setB] = useState(0)
    /* 
      b is a variable whose initial value is 0
      setB is a function that you can use to update b anytime
     */
    // let [count,setCount] = useState(0);
    let trackClicks = useRef(0);
    // let oldSqure = useRef(0);
    let [cart,setCart] = useRecoilState(cartAtom);
    let {count,setCount,handleCount,countSquare} = useCounter(0);
    // function handleCount(type) {
    //     if(type === '+') {
    //        setCount( ++count)
    //     }
    //     if(type === '-') {
    //        setCount( --count)
    //     }

    // }
    function handleTracker() {
        trackClicks.current += 1;
        if(trackClicks.current === 10) {
            setCount(prev=> prev +1)
        }

    }

    useEffect(()=> {
        // alert('Page refreshed on start!');
        
    },[count%5===0?count:null])
    
    
    // function  countSquare() {
    //     if(count%5===0) {
    //        oldSqure.current = count * count;
    //         return count * count;
            
    //     }else{
    //         return oldSqure.current
    //     }
    // }


    console.count('Counter rendered: ')
  return (
    <div>
        <h3> Count Score: {count} | Count Square: {countSquare()} </h3>
        <button onClick={()=> handleCount('+') } > Count ++ </button> <br />
        <button onClick={()=> handleTracker()} > Ref Count: {trackClicks.current} </button> <br />
        <button onClick={()=> handleCount('+') } > Count ++ </button> <br />
        <button onClick={()=> handleCount('-') } > Count -- </button> <br />
        <button onClick={()=> setCart(prev=> prev + 1)} > Add to Cart </button>
    </div>
  )
}

export default Counter