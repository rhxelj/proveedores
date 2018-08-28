import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { stringify } from 'querystring';

class ModificarProveedor extends Component {
    constructor(props){
        super(props)
        this.state = {
            idProveedores:1,
            ProveedoresDesc:'',
            ProveedoresTipo: 1,
            ProveedoresCUIT:'',
            ProveedoresCalle:'',
            ProveedoresNroCalle:'',
            ProveedoresPiso:'',
            ProveedoresDto:'',
            ProveedoresCodPos:'',
            ProveedoresLoc:'',
            ProveedoresPcia:'',
            ProveedoresTel:'',
            ProveedoresContacto:'',
            ProveedoresMail:'',
            ProveedoresWeb:'',
            ProveedoresCodMon:'',
            proveedores:[]
        }
        this.renderEditable = this.renderEditable.bind(this)
    }    
    
    //Read
    read = _ => {
        const url = 'http://192.168.2.102:4000/leerproveedor'; //'http://192.168.2.102:4000/leerproveedor'
        request
        .get(url)
        .set('Content-Type', 'application/json')
            .then(res=> {
            const proveedores = JSON.parse(res.text)
            this.setState({proveedores: proveedores})
            })
    }

    //Update
    updateProduct = (params) => {
      const  proveedor  = params;
    request                  
       .post('http://localhost:4000/modificarproveedor/'+proveedor.idProveedores)
       .set('Content-Type', 'application/json')
       
       /* .send({ idProveedores: this.state.idProveedores}) */
       .send({ ProveedoresDesc: params.ProveedoresDesc})
       .send({ ProveedoresTipo: params.ProveedoresTipo})
       .send({ ProveedoresCUIT: params.ProveedoresCUIT})        
       .send({ ProveedoresCalle: params.ProveedoresCalle})
       .send({ ProveedoresNroCalle: params.ProveedoresNroCalle})
       .send({ ProveedoresPiso: params.ProveedoresPiso})
       .send({ ProveedoresDto: params.ProveedoresDto})
       .send({ ProveedoresCodPos: params.ProveedoresCodPos})
       .send({ ProveedoresLoc: params.ProveedoresLoc})
       .send({ ProveedoresPcia: params.ProveedoresPcia})
       .send({ ProveedoresTel: params.ProveedoresTel})
       .send({ ProveedoresContacto: params.ProveedoresContacto})
       .send({ ProveedoresMail: params.ProveedoresMail})
       .send({ ProveedoresWeb: params.ProveedoresWeb})
       .send({ ProveedoresCodMon: params.ProveedoresCodMon})


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
              const proveedores = [...this.state.proveedores];
              proveedores[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ proveedores });
            //   console.log('cellInfo: '+  JSON.stringify(cellInfo))
            //   console.log(cellInfo.original)
              this.updateProduct(cellInfo.original)
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.proveedores[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
      }

    render(){
        const proveedores = this.state.proveedores
        return( 
            <div>
                <h1>Actualiza Proveedores</h1>
                <ReactTable
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
                        defaultPageSize={20}
                        className="-striped -highlight"
                    />
            </div>
        )
    }
}

export default ModificarProveedor