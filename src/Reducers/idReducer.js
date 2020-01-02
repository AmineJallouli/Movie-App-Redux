const idReducer = (state = "",action)=>{
    if (action.type ==="GET_ID"){
        return action.payload 
    }
    else return state
}

export default idReducer