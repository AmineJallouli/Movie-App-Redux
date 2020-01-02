const Display = (state = false,action)=>{
    if (action.type ==="SET_STYLE"){
        return state = !state
    }
    else return state
}

export default Display