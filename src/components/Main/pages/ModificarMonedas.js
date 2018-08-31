
import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { stringify } from 'querystring';

import IpServidor from './VariablesDeEntorno'

class ModificarMonedas extends Component {
    constructor(props){
        super(props)
        this.state = {
            idTipoMonedas:'',
            TipoMonedasDescripcion:'',
            TipoMonedasCotizacion: 0,
            monedas:[]
        }
        this.renderEditable = this.renderEditable.bind(this)
    }    
    
    //Read
    read = _ => {
        const url = IpServidor + '/leermonedas'; //'http://192.168.2.102:4000/indexprov'
        request
        .get(url)
        .set('Content-Type', 'application/json')
            .then(res=> {
            const monedas = JSON.parse(res.text)
            this.setState({monedas: monedas})
            })
    }

    //Update
    updateProduct = (params) => {
     
      const  monedas  = params;
     
    request                  
       .post('http://localhost:4000/modificarmonedas/'+monedas.idTipoMonedas)
       .set('Content-Type', 'application/json')
       
    //    .send({ idtipomonedas: this.state.idtipomonedas})
       .send({ TipoMonedasDescripcion: params.TipoMonedasDescripcion})
       .send({ TipoMonedasCotizacion: params.TipoMonedasCotizacion})
       .set('X-API-Key', 'foobar')
       .then(function(res) {
      // res.body, res.headers, res.status
        });
       
        //this.getproveedores();
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
              const monedas = [...this.state.monedas];
              monedas[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ monedas });
              console.log('esto es  ', monedas);
            //   console.log('cellInfo: '+  JSON.stringify(cellInfo))
            //   console.log(cellInfo.original)
              this.updateProduct(cellInfo.original)
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.monedas[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
      }

    render(){
        const monedas = this.state.monedas
        return( 
            <div>
                <h1>Actualiza Monedas</h1>
                <ReactTable
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
                                    accessor: "TipoMonedasDescripcion",
                                    Cell: this.renderEditable
                                    },
                                    {
                                    Header: "Cotización",
                                    accessor: "TipoMonedasCotizacion",
                                    Cell: this.renderEditable
                                    },
                                    
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

export default ModificarMonedas