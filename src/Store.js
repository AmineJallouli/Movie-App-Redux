import {createStore,combineReducers } from "redux"
import OutputReducer from "./Reducers/OutputReducer.js"
import InputName from "./Reducers/InputName"
import InputImage from "./Reducers/InputImage"
import InputRating from "./Reducers/InputRating"
import Search from "./Reducers/Search"
import SearchStar from "./Reducers/SearchStar"
import Display from "./Reducers/Display"

import idReducer from "./Reducers/idReducer.js"
import InputDescription from "./Reducers/InputDesc.js"


const Store =createStore(combineReducers({
    name:InputName,
    image:InputImage,
    rating:InputRating,
    output:OutputReducer,
    search:Search,
    searchstar:SearchStar,
    display:Display,
    id:idReducer,
    desc:InputDescription
})) 

export default Store