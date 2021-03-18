import React, { useState,useEffect } from 'react';
import {addTodo,store} from './Redux'

const AddTodo=()=>{
    const[todo,setTodo]=useState('')

    useEffect(()=>{
        console.log(JSON.stringify(todo))
    },[])
    return(
        <div>
            <input type='text'value={todo} onChange={(e)=>setTodo(e.target.value)} name='todo'></input>
            <button onClick={(e)=>{
                e.preventDefault();
                store.dispatch(addTodo(todo));

            }}>Add Todo</button>
        </div>
    )
}
export default AddTodo;