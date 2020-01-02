const InputDescription =(state="",action)=>{
    if (action.type==="INPUT_DESC"){   
         return action.payload
   
    }
    else return state
    
}

export default InputDescription

