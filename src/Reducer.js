const Reducer=(state,action)=>{
    if (action.type==='CHANGE_LOGIN') {
        if (!action.payload) {
            localStorage.removeItem('token')
            localStorage.removeItem('following')
        }
        return({...state,loggedIn:action.payload})
    }
    if (action.type==='CHANGE_FOLLOWING') {
        localStorage.removeItem('following')
        localStorage.setItem('following',JSON.stringify(action.payload))
        return ({...state,following:action.payload})
    }
    throw new Error('no matching action type')
}
export default Reducer