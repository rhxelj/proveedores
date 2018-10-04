import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import AgregarMonedas from './AgregarMonedas'
import BorrarMonedas from './BorrarMonedas'

import IpServidor from './VariablesDeEntorno'

class Monedas extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle: false,
            idTipoMonedas:'',
            TipoMonedasDescripcion:'',
            TipoMonedasCotizacion: 0,
            monedas:[]
        }
        this.renderEditable = this.renderEditable.bind(this)
        this.toggle = this.toggle.bind(this);
        this.funcionTest = this.funcionTest.bind(this);
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
    ActualizaMoneda = (params) => {
     
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
    
     deleteProduct = (id)=> {
        
        //       const { moneda } = this.state;
               request
                 .delete('http://localhost:4000/borrarmonedas/'+id)
                 .set('Content-Type', 'application/json')
                 //.set('X-API-Key', 'foobar')
                 .then(function(res) {
               // res.body, res.headers, res.status
                 })
                 .catch(err => {
                    if (err.status === 411) 
                            {
                            alert('Código de Moneda Usado no se puede borrar  ') 
                            }
                        })
                 //alert("Borrado")
                //  this.toggle()
                 this.read()
             }
    
    toggle(event){
        this.setState(prevState => ({
        toggle: !prevState.toggle
        }))
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
              const monedas = [...this.state.monedas]
              monedas[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
              this.setState({ monedas })
              this.ActualizaMoneda(cellInfo.original)
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.monedas[cellInfo.index][cellInfo.column.id]
            }}
          />
        )
      }


      funcionTest(){ 
        alert('ggggg')
        
      }

    render(){
        const monedas = this.state.monedas.map( (rowData,index) => 
        // Object.assign(rowData, { borrar: <button className=" red accent-4" onClick={()=>this.deleteProduct(rowData.idTipoMonedas)}>Borrar</button> })
        Object.assign(rowData, { borrar: 
            <div className="center-align"><BorrarMonedas idMonedas={rowData.idTipoMonedas}></BorrarMonedas></div>})
            // <button 
            //     className=" red accent-4" 
            //     onClick={this.funcionTest}
            //     >
            //     Borrar
            // </button> })
        );
        return( 
            <div>
                {/* <BorrarMonedas ></BorrarMonedas> */}
                <h1>ABM DE Monedas</h1>
                
                
                {this.state.toggle
                ?
                <div>
                    <div className="row">
                        <div className="col s12 ">
                            <div className="">
                                <div className="card-content  white-text">
                                    <AgregarMonedas click={()=>this.toggle()}> </AgregarMonedas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <p onClick={()=>this.toggle()} className='btn'>AGREGAR monedas</p>
                }
               
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
                                    {
                                        Header: "",
                                        accessor: "borrar",
                                        // Cell: this.renderEditable
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

export default Monedas