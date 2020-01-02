import React, { Component } from 'react';
import {connect} from "react-redux"
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <section>
            <div className="footer">
              <div className>
                <input type="text" onChange={(e) => {this.props.SearchName(e.target.value)}} />
                <span>Search</span>
              </div>
              <div className="star">
                <span onClick={() => this.props.SearchStar(1)}>★</span>
                <span onClick={() => this.props.SearchStar(2)}>★</span>
                <span onClick={() => this.props.SearchStar(3)}>★</span>
                <span onClick={() => this.props.SearchStar(4)}>★</span>
                <span onClick={() => this.props.SearchStar(5)}>★</span>
              </div>
            </div>
            <div className="movielist">
                  {this.props.movies.filter((el)=>el.name.toUpperCase().includes(this.props.searchname.toUpperCase()) && el.rating<=this.props.searchstar).map(el=>{
                    return(
                      
                         <div key={el.id} className='movie'>
                           <div>
                             <p>{"".padEnd(el.rating,"★")}</p>
                             <img  src={el.image}  alt="img-movie"></img>
                             <p className='name-movie'>{el.name}</p>
                           </div>
                            <div>
                              <button onClick={()=>this.props.getid(el.id,this.props)}>More Details</button>
                              <button onClick={()=>{this.props.Edit(el.id)}}>Edit</button>
                              <button onClick={()=>{this.props.Delete(el.id)}}>Remove</button>
                            </div>
                         </div> 
                    )
                  })}
              </div>
              <div className="addmovie">
                <span className="pls" onClick={this.props.Display}>+</span>
              </div>
           
    
              <div>
                <form className={this.props.display ? "display" : "none"}>
                  <span onClick={this.props.Display}>X</span>
                  <input type="text" placeholder="Movie Name" onChange={(event) => { this.props.InputName(event.target.value)} } />
                  <input type="text" placeholder="Poster URL" onChange={(event) => { this.props.InputImage(event.target.value)}} />
                  <input type="number" placeholder="Movie Rating" onChange={(event) => { this.props.InputRating(event.target.value)}} />
                  <input type="text" placeholder="Movie Description" onChange={(event)=>{this.props.InputDescription(event.target.value)}}/>
                  <span onClick={()=>{this.props.Add(this.props.name,this.props.image,this.props.rating,this.props.desc)}} className="submit">Submit</span>
                </form>
              </div>
            
          </section> );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        Add: (a,b,c,d) =>{
            dispatch({
                type:"ADD_MOVIE",
                payload:{
                  image: a,
                  name: b,
                  rating: c,
                  description:d,
                  id:Math.random()
                },
                
            })
        },
        InputName:x=>{
          dispatch({
            type:"SET_NAME",
            payload:x
          })
        },
        InputImage:y=>{
          dispatch({
            type:"SET_IMAGE",
            payload:y
          })
        },
        InputRating:z=>{
          dispatch({
            type:"SET_RATING",
            payload:z
          })
        },
        SearchName:x=>{
          dispatch({
            type:"ITEM_SEARCH",
            payload:x
          })
        },
        SearchStar:x=>{
          dispatch({
            type:"ITEM_SEARCHSTAR",
            payload:x
          })
        },
        Edit:(x)=>{
          dispatch({
            type:"EDIT_MOVIE",
            payload:{
              name:prompt("New Movie Name"),
              image:prompt("New URL Poster"),
              rating:prompt("Rating"),
              id:x
            }
          })
        },
        Delete:(x)=>{
          dispatch({
            type:"DELET_MOVIE",
            payload:x
          })
        },
        Display:()=>{
          dispatch({
            type:"SET_STYLE"
          })
        },
        InputDescription:(x)=>{
          dispatch({
            type:"INPUT_DESC",
            payload:x
          })
        },
        getid:(x,y)=>{
          dispatch({
            type:"GET_ID",
            payload:x
          })
          setTimeout(()=>y.history.push("/DESCRIPTION"),200)
          console.log(y)
        }
    }
}

const mapStateToProps=(state)=>{
    return{
        name:state.name,
        image:state.image,
        rating:state.rating,
        movies:state.output,
        searchname:state.search,
        searchstar:state.searchstar,
        display:state.display,
        desc:state.desc
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Card);