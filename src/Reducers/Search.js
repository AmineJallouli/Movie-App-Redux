const Search = (state="",action)=>{
    if (action.type==="ITEM_SEARCH"){
        return action.payload
    }
    else return state
}

export default Search