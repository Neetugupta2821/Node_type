import React, { useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type){
        case 'INCREMENT':
            return{count:state.count+1};
            case 'DECREMENT':
                return{count:state.count-1};
                default:
                    return state;
    }

}

    function UseReducerType() {
        const InitialState = { count: 0 }
        const [state, dispatch] = useReducer(reducer, InitialState)
        const increment = () => {
            dispatch({ type: 'INCREMENT' })
        }
        const decrement=()=>{
            dispatch({type:'DECREMENT'})
        }
        return (
            <>
            <p>count{state.count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

            </>
        )
    }
    export default UseReducerType;