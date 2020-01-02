const InputName =(state="",action)=>{
    if (action.type==="SET_NAME"){
        return action.payload
    }
    else 
    return state
}

export default InputName