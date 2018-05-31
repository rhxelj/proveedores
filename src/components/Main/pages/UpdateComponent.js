import React, { Component} from 'react'
import request from 'superagent'
import ReadComponent from './ReadComponent';

class UpdateComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[],
        }
    }    
    
    modifica(){
        console.log('presiono li')
    }
    componentDidMount(){
        console.log('update cargado')
    }
    
    render(){
        
        return( 
            <div>
                <h1>UpdateComponent</h1>
                <ul>
                    <li onClick={this.modifica}>show all and optianly start to filter</li>
                    <li>select</li>
                    <li>modify</li>
                    <li>accept or cancel</li>
                </ul>
                <ReadComponent />
            </div>
        )
    }
}

export default UpdateComponent