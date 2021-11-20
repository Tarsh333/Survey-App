import React, { useContext, useReducer } from 'react'
import Reducer from './Reducer'
const AppContext = React.createContext()
const token = localStorage.getItem('token')
const initialState = {
    loggedIn: token ? true : false,
    following: JSON.parse(localStorage.getItem('following'))?JSON.parse(localStorage.getItem('following')):[]
}
const Context = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const changeLogin = (payload) => {
        dispatch({ type: 'CHANGE_LOGIN', payload })
    }
    const changeFollowingArray = (payload) => {
        dispatch({ type: 'CHANGE_FOLLOWING', payload })
    }
    return (
        <AppContext.Provider value={{
            ...state,
            changeLogin,
            changeFollowingArray
        }}>
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext = () => {
    return useContext(AppContext)
}
export { Context, useGlobalContext }
