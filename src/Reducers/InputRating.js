const InputRating =(state="",action)=>{
    if (action.type==="SET_RATING"){
        return action.payload
    }
    else 
    return state
}

export default InputRating