import{
    combineReducers,
    createStore
}from 'redux'



const WITHDRAW='WITHDRAW'
const DEPOSIT='DEPOSIT'

const ADD_TODO='ADD_TODO'
const REMOVE_TODO='REMOVE_TODO'

export const withdraw=()=>{
    return{
        type:WITHDRAW
    }
}
export const deposit=()=>{
    return{
        type:DEPOSIT
    }
}
export const addTodo=(todo)=>{
    return {
        type:ADD_TODO,
        todo
    }
}

export const removeTodo=(todo)=>{
    return {
        type:REMOVE_TODO,
        todo
    }
}
let initialState={
    amount:200,
    disabled:false
}
const Ac=(state=initialState,action)=>{
    console.log(JSON.stringify(action))
     switch(action.type){
         case WITHDRAW:
             return{
                 amount:state.amount-10,
                 disabled:(state.amount==10)?true:false
             };
         case DEPOSIT:
             return{
                 amount:state.amount+10,
                 disabled:false
             }

             default:
                 return state;
     }
}

     const todos=(state=[],action)=>{
        switch(action.type){
            case ADD_TODO:
                return [...state,action.todo]
            case REMOVE_TODO:
                return state.filter((currentTodo)=>{
                    return currentTodo!=action.todo
                })
            default:
                return state;
        }
    }

export const store=createStore(combineReducers({Ac,todos}));