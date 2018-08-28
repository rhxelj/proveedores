import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


class LeerTipoProv extends Component {
    constructor(props){
        super(props)
        this.state = {
            proveedor:[]
        }
    }    
    
    //Read
    read = _ => {
        const url = 'http://192.168.2.102:4000/leerproveedor' ; //'http://localhost:3000/data'
        request
        .get(url)
        .set('Content-Type', 'application/json')
            .then(res=> {
            // const products = JSON.parse(res.text)
            // this.setState({products: products})
            const proveedor = JSON.parse(res.text)
            this.setState({proveedor: proveedor})
            })
    }
    
    componentDidMount(){
        this.read()
    }
    
    render(){
        // const products = this.state.products
        const proveedor = this.state.proveedor
        return( 
            <div>
                <ul>
                    <ReactTable
                        // data={products}
                        data={proveedor}
                        columns={[
                             {                   
                                columns: [
                                    {
                                    Header: "Código",
                                    accessor: "idProveedores"
                                    
                                    },
                                    {
                                    Header: "Denomiación",
                                    accessor: "ProveedoresDesc",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Tipo",
                                    accessor: "TipoProveedDesc",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "CUIT",
                                    accessor: "ProveedoresCUIT",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Calle",
                                    accessor: "ProveedoresCalle",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Nro",
                                    accessor: "ProveedoresNroCalle",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Piso",
                                    accessor: "ProveedoresPiso",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Dto",
                                    accessor: "ProveedoresDto",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Cod.Postal",
                                    accessor: "ProveedoresCodPos",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Localidad",
                                    accessor: "ProveedoresLoc",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Provincia",
                                    accessor: "ProveedoresPcia",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Teléfono",
                                    accessor: "ProveedoresTel",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Contacto",
                                    accessor: "ProveedoresContacto",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "mail",
                                    accessor: "ProveedoresMail",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Pág. Web",
                                    accessor: "ProveedoresWeb",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Moneda",
                                    accessor: "ProveedoresCodMon",
                                    Cell: this.renderEditable
                                    }
                            ]
                        }                
                            
                        ]}
                  
                    />
                 
                </ul>
            </div>
        )
    }
}

export default LeerTipoProv