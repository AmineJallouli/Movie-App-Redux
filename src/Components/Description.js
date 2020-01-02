import React, { Component } from 'react';
import { connect } from 'react-redux';
class Description  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <p>{this.props.list.filter(el=>el.id===this.props.id).map(el=>{
                return(
                    <div key={el.id}>
                        {el.description}
                  
                    </div>
                )
            })}</p>
        </div> );
    }
}
 
const mapStateToProps=(state)=>{
    return{
        list:state.output,
       id:state.id
    }
}

export default connect(mapStateToProps) (Description) ;