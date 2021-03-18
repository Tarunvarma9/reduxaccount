import React,{useState,useEffect} from 'react'
import {store} from './Redux'

const Balance=()=>{
    const[amount,setAmount]=useState(200);

useEffect(()=>{
    store.subscribe(()=>{
        var state=store.getState();
        setAmount(state.amount);
    })

})
    

    return(
        <div>
            <h4>Account Balance:</h4>
            <h3>$ {amount}</h3>
           
        </div>
    )
}
export default Balance;