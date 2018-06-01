import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { stringify } from 'querystring';

class UpdateComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[],
        }
        this.renderEditable = this.renderEditable.bind(this)
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

    //Update
    updateProduct = (params) => {
      const  product  = params;
    request                  
       .put('http://localhost:3000/data/'+product.id)
       .set('Content-Type', 'application/json')
       .send({ name: params.name})
       .send({ price: params.price})
       .set('X-API-Key', 'foobar')
       .then(function(res) {
      // res.body, res.headers, res.status
        });
        //this.getProducts();
     }
    
    componentDidMount(){
        this.read()
    }
    
    renderEditable(cellInfo) {
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const products = [...this.state.products];
              products[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ products });
            //   console.log('cellInfo: '+  JSON.stringify(cellInfo))
            //   console.log(cellInfo.original)
              this.updateProduct(cellInfo.original)
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.products[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
      }

    render(){
        const products = this.state.products
        return( 
            <div>
                <h1>UpdateComponent</h1>
                <ReactTable
                        data={products}
                        columns={[
                             {                   
                            columns: [
                                {
                                Header: "Product Name",
                                accessor: "name",
                                Cell: this.renderEditable
                                },
                                {
                                Header: "Product Price",
                                accessor: "price",
                                Cell: this.renderEditable
                                }
                            ]
                        }                
                            
                        ]}
                        defaultPageSize={20}
                        className="-striped -highlight"
                    />
            </div>
        )
    }
}

export default UpdateComponent