import React, { Component} from 'react'
import request from 'superagent'

class DeleteComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[],
        }
    }    
    
    
    componentDidMount(){
    }
    
    render(){
        
        return( 
            <div>
                <h1>DeleteComponent</h1>
            </div>
        )
    }
}

export default DeleteComponent