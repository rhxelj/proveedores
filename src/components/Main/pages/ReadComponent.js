import React, { Component} from 'react'
import request from 'superagent'

class ReadComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[],
        }
    }    
    
    //Read
    read = _ => {
        const url = 'http://localhost:3000/data'; //'http://192.168.2.102:4000/indexprov'
        request
        .get(url)
        .set('Content-Type', 'application/json')
            .then(res=> {
            const products = JSON.parse(res.text)
            this.setState({products: products})
            })
    }
    
    componentDidMount(){
        this.read()
    }
    
    render(){
        const products = this.state.products
        const listado = 
            products.map((product) => <li key={product.id}>{product.name} .......... $ {product.price}</li> )
        
        return( 
            <div>
                <ul>
                    {listado} 
                </ul>
            </div>
        )
    }
}

export default ReadComponent