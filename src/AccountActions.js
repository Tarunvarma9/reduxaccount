import React, { useState,useEffect } from 'react';
import{store,withdraw,deposit} from './Redux'


const AccountActions=()=>{
    const[disabled,setDisabled]=useState(false)


    useEffect(() => {
        store.subscribe(()=>{
            var state=store.getState();
            setDisabled(state.disabled)

        })
    }, [])
    let withdraw=()=>{
        store.dispatch({type:'WITHDRAW'})
    }

    let deposit=()=>{
        store.dispatch({type:'DEPOSIT'})
    }



    return(
        <div>
            <button onClick={withdraw} disabled={disabled}>Withdraw</button>
            <button onClick={deposit}>Deposit</button>
        </div>
    )
}
export default AccountActions;