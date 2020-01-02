const InputImage =(state="",action)=>{
    if (action.type==="SET_IMAGE"){
        return action.payload
    }
    else 
    return state
}

export default InputImage