const Reducer=(state,action)=>{
    if (action.type==='CHANGE_SOMETHING') {
        return({...state,something:action.payload})
    }
    throw new Error('no matching action type')
}
export default Reducer