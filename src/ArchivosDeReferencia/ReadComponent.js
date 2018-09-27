import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


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
        
        return( 
            <div>
                <ul>
                    <ReactTable
                        data={products}
                        columns={[
                             {                   
                            columns: [
                                {
                                Header: "Product Name",
                                accessor: "name"
                                },
                                {
                                Header: "Product Price",
                                accessor: "price"
                                }
                            ]
                        }                
                            
                        ]}
                        defaultPageSize={20}
                        className="-striped -highlight"
                    />
                    {/* {listado}  */}
                </ul>
            </div>
        )
    }
}

export default ReadComponent