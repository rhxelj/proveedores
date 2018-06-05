import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class DeleteComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[],
            // filtrado:[],
            filtered:''
        }
        this.search = this.search.bind(this)
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
            // this.setState({filtrado: products})
            })
    }

    // //Delete
      deleteProduct = (id)=> {
        
        const { product } = this.state;
        request
          .delete('http://localhost:3000/data/'+id)
          .set('Content-Type', 'application/json')
          //.set('X-API-Key', 'foobar')
          .then(function(res) {
        // res.body, res.headers, res.status
          })
          alert("Borrado")
          this.read()
      }
    
    listado = _=>{
        let products = this.state.products.filter((product)=>{
            return product.name.toLowerCase().indexOf(this.state.filtered.toLowerCase()) !== -1
        })
        const listado = products.map((product)=> 
           
                <li key={product.id}>{product.name}  
                    <button onClick={()=>this.deleteProduct(product.id)}>Delete</button>
                </li>
           
        )
        return listado
    } 
    
    search(event){
        var name  = event.target.name
        var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
        this.setState({filtered: value})
        //console.log(this.state.products)
    }

    componentDidMount(){
        this.read()
    }

    render(){
        // const products = this.state.products
        // const listado = products.map((product)=> <li key={product.id}>{product.name}</li>)
        // let products = this.state.products.filter((product)=>{
       
        //     return product.name.toLowerCase().indexOf(this.state.filtered.toLowerCase()) !== -1// return product.name.indexOf(this.state.filtered) !== -1
        // })
        // const listado = products.map((product)=> 
        //     <div>
        //         <li key={product.id}>{product.name}  
        //             <button onClick={()=>this.deleteProduct(product.id)}>Delete</button>
        //         </li>
                
        //     </div>
        // ) 
       // return (list)
        // return console.log('listado')
        
        return( 
            <div>
                <h1>DeleteComponent</h1>
                <input onChange={this.search} type="text" value={this.state.filtered}/>
                <ul>
                    {this.listado()}
                </ul>
            </div>
        )
    }
}

export default DeleteComponent