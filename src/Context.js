import React, { useContext, useReducer } from 'react'
import Reducer from './Reducer'
const AppContext=React.createContext()
const initialState={
    something:"something"
}
const Context = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const changeSomething=(payload)=>{
        dispatch({type:'CHANGE_SOMETHING',payload})
    }
    return (
        <AppContext.Provider value={{
            ...state,
            changeSomething
        }}>
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext = () => {
    return useContext(AppContext)
  }  
export {Context,useGlobalContext}
