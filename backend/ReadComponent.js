import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


class ReadComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
         //   products:[],
            proveedores:[],
        }
    }    
    
    //Read
    read = _ => {
        const url = 'http://192.168.2.102:4000/indexprov' ; //'http://localhost:3000/data'
        request
        .get(url)
        .set('Content-Type', 'application/json')
            .then(res=> {
            // const products = JSON.parse(res.text)
            // this.setState({products: products})
            const proveedores = JSON.parse(res.text)
            this.setState({proveedores: proveedores})
            })
    }
    
    componentDidMount(){
        this.read()
    }
    
    render(){
        // const products = this.state.products
        const proveedores = this.state.proveedores
        return( 
            <div>
                <ul>
                    <ReactTable
                        // data={products}
                        data={proveedores}
                        columns={[
                             {                   
                            columns: [
                                {
                                Header: "Código",
                                accessor: "idProveedores"
                                },
                                {
                                Header: "Denomiación",
                                accessor: "ProveedoresDesc"
                                },
                                {
                                Header: "Tipo",
                                accessor: "TipoProveedDesc"
                                
                                },
                                {
                                Header: "CUIT",
                                accessor: "ProveedoresCUIT"
                                },
                                {
                                Header: "Calle",
                                accessor: "ProveedoresCalle"
                                },
                                {
                                Header: "Nro",
                                accessor: "ProveedoresNroCalle"
                                },
                                {
                                Header: "Piso",
                                accessor: "ProveedoresPiso"
                                },
                                {
                                Header: "Dto",
                                accessor: "ProveedoresDto"
                                },
                                {
                                Header: "Cod.Postal",
                                accessor: "ProveedoresCodPos"
                                },
                                {
                                Header: "Localidad",
                                accessor: "ProveedoresLoc"
                                },
                                {
                                Header: "Provincia",
                                accessor: "ProveedoresPcia"
                                },
                                {
                                Header: "Teléfono",
                                accessor: "ProveedoresTel"
                                },
                                {
                                Header: "Contacto",
                                accessor: "ProveedoresContacto"
                                },
                                {
                                Header: "mail",
                                accessor: "ProveedoresMail"
                                },
                                {
                                Header: "Pág. Web",
                                accessor: "ProveedoresWeb"
                                },
                                {
                                Header: "Moneda",
                                accessor: "ProveedoresCodMon"
                                }
                                
                            ]
                        }                
                            
                        ]}
                      /*   pivotBy={["ProveedoresDesc", "TipoProveedDesc"]}
                        defaultPageSize={20}
                        className="-striped -highlight" */
                    />
                    {/* {listado}  */}
                </ul>
            </div>
        )
    }
}

export default ReadComponent