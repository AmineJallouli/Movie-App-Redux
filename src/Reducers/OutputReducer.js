const list=[{id:1, name:"Joker",image:"https://images-na.ssl-images-amazon.com/images/I/81ZaImi38-L._SL1500_.jpg",rating:"5",description:"hjgfjhgukh"},
{id:2, name:"6 Underground",image:"https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/EJWDEpFXsAMm9gJ.jpg",rating:"4",description:"azdesaqc"},
{id:3, name:"Inception",image:"https://i.ebayimg.com/images/g/2jIAAOSwUYNaHTlA/s-l300.jpg",rating:"3",description:"acaeffc"}]

const OutputReducer=(state=list,action)=>{
    if(action.type==="ADD_MOVIE"){
        return ([...state,action.payload])       
    }
    else if (action.type==="EDIT_MOVIE"){
        return ([...state.filter(el=>el.id!==action.payload.id), action.payload])
    }
    else if (action.type==="DELET_MOVIE"){
        return state.filter(el=>el.id!==action.payload)
    }

    else return state
}

export default OutputReducer