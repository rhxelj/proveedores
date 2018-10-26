import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import StkUnMedAgregar from './StkUnMedAgregar'
import StkUnMedBorrar from './StkUnMedBorrar'

import IpServidor from './VariablesDeEntorno'

class UnidadMedidas extends Component {
    constructor(props){
        super(props)
        this.state = {
            url: IpServidor +'/leerstkunmed',
            toggle: false,
            idStkUnMed:'',
            StkUnMedDesc:'',
            datos:[]
        }
        this.renderEditable = this.renderEditable.bind(this)
        this.toggle = this.toggle.bind(this);
        // this.funcionTest = this.funcionTest.bind(this);
    }    
    
    //Read
    read = _ => {
        // const url = IpServidor +'/agregarstkunmed'
        request
        .get(this.state.url)
        .set('Content-Type', 'application/json')
            .then(res=> {
            const datos = JSON.parse(res.text)
            this.setState({datos: datos})
            })
    }

    // //Update
    // ActualizaMoneda = (params) => {
     
    //   const  datos  = params;
     
    // request                  
    //    .post('http://localhost:4000/modificarmonedas/'+datos.idStkMonedas)
    //    .set('Content-Type', 'application/json')
       
    // //    .send({ idtipomonedas: this.state.idtipomonedas})
    //    .send({ StkMonedasDescripcion: params.StkMonedasDescripcion})
    //    .send({ StkMonedasCotizacion: params.StkMonedasCotizacion})
    //    .set('X-API-Key', 'foobar')
    //    .then(function(res) {
    //   // res.body, res.headers, res.status
    //     });
       
    //     //this.getproveedores();
    //  }
    
    //  deleteProduct = (id)=> {
        
    //     //       const { moneda } = this.state;
    //            request
    //              .delete('http://localhost:4000/borrarmonedas/'+id)
    //              .set('Content-Type', 'application/json')
    //              //.set('X-API-Key', 'foobar')
    //              .then(function(res) {
    //            // res.body, res.headers, res.status
    //              })
    //              .catch(err => {
    //                 if (err.status === 411) 
    //                         {
    //                         alert('Código de Moneda Usado no se puede borrar  ') 
    //                         }
    //                     })
    //              //alert("Borrado")
    //             //  this.toggle()
    //              this.read()
    //          }
    
    toggle(event){
        this.setState(prevState => ({
        toggle: !prevState.toggle
        }))
    }
    
    componentWillUnmount(){
        this.read()
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
              const datos = [...this.state.datos]
              datos[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
              this.setState({ datos })
            //   this.ActualizaMoneda(cellInfo.original)
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.datos[cellInfo.index][cellInfo.column.id]
            }}
          />
        )
      }


    //   funcionTest(){ 
    //     alert('ggggg')
        
    //   }

    render(){
        const datosTabla = this.state.datos.map( (rowData,index) => 
        Object.assign(rowData, { borrar: 
            <div className="center-align"><StkUnMedBorrar id={rowData.idStkUnMed} read={()=>this.read()}></StkUnMedBorrar></div>})
        );
        return( 
            <div>
                {/* <BorrarMonedas ></BorrarMonedas> */}
                <h1>ABM DE UnidadMedidas</h1>
                
                
                {this.state.toggle
                ?
                <div>
                    <div className="row">
                        <div className="col s12 ">
                            <div className="">
                                <div className="card-content  white-text">
                                    <StkUnMedAgregar click={()=>this.toggle()} read={()=>this.read()}> </StkUnMedAgregar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <p onClick={()=>this.toggle()} className='btn'>AGREGAR datos</p>
                }
               
                <ReactTable
                        data={datosTabla}

                        filterable
                        defaultSorted={[
                            {
                                id: "codigo",
                                desc: true
                            }
                        ]}

                        columns={[
                             {                   
                            columns: [
                                    {
                                    Header: "Código",
                                    id:"codigo",
                                    accessor: "idStkUnMed"
                                    
                                    },
                                    {
                                    Header: "Descripción",
                                    accessor: "StkUnMedDesc",
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

export default UnidadMedidas