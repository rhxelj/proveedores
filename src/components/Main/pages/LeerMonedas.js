import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import IpServidor from './VariablesDeEntorno'

class LeerMonedas extends Component {
    constructor(props){
        super(props)
        this.state = {
            monedas:[]
        }
    }    
    
    //Read
    read = _ => {
        const url = IpServidor + '/leermonedas' ; //'http://localhost:3000/data'
        request
        .get(url)
        .set('Content-Type', 'application/json')
            .then(res=> {
            // const products = JSON.parse(res.text)
            // this.setState({products: products})
            const monedas = JSON.parse(res.text)
            this.setState({monedas: monedas})
            })
    }
    
    componentDidMount(){
        this.read()
    }
    
    render(){
        // const products = this.state.products
        const monedas = this.state.monedas
        return( 
            <div>
                <ul>
                    <ReactTable
                        // data={products}
                        data={monedas}
                        columns={[
                             {                   
                                columns: [
                                    {
                                    Header: "Código",
                                    accessor: "idTipoMonedas"
                                    
                                    },
                                    {
                                    Header: "Denomiación",
                                    accessor: "TipoMonedasDescripcion"
                         
                                    },
                                    {
                                    Header: "Cotización",
                                    accessor: "TipoMonedasCotizacion"
                                    },
                                   
                                    
                                    
                            ]
                        }                
                            
                        ]}


                        getTdProps={(state, rowInfo, column, instance) => {
                            return {
                              onClick: (e, handleOriginal)  =>
                                console.log("Cell - onMouse Click", {
                                  state,
                                  rowInfo,
                                  column,
                                  instance,
                                  event: e
                                },
                                alert("entro en modo edicion"),
                                console.log(
                                    "Contenido de rowInfo : " + rowInfo.original.TipoMonedasDescripcion),
                                    console.log("indice = "+rowInfo.index)
                                )
                                
                               
                            };
                          }}

                        // pivotBy={["TipoMonedasDescripcion", "TipoMonedasCotizacion"]}
                        // defaultPageSize={20}
                        // className="-striped -highlight" 
                    />
                    {/* {listado}  */}
                </ul>
            </div>
        )
    }
}

export default LeerMonedas