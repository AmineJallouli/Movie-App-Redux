const SearchStar = (state=5,action)=>{
    if (action.type==="ITEM_SEARCHSTAR"){
        return action.payload
    }
    else return state
}

export default SearchStar