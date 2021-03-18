import React, { useState,useEffect } from 'react';
import {removeTodo,store} from './Redux'

const Todos=()=>{
    const[todos,setTodos]=useState([]);
    useEffect(()=>{
    store.subscribe(()=>{
        var state=store.getState();
       setTodos(state.todos);
    })
    
    },[])
    let remove=(todo)=>{
        store.dispatch(removeTodo(todo))
    }

    return<div>
       <ul>
           {
               todos.map((todo,index)=>{
                   return<li key={index}>{todo}
                   <button onClick={()=>remove(todo)}>Remove</button>
                   
                   
                   
                   </li>
               })
           }
       </ul>
    </div>
}
export default Todos;