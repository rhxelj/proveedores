import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { stringify } from 'querystring';

class UpdateComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            idproveedores:1,
            provdesc:'',
            provtipo: 1,
            provcuit:'',
            provcalle:'',
            provnrocalle:'',
            provpiso:'',
            provdto:'',
            provcodpostal:'',
            provlocalidad:'',
            provprovincia:'',
            provtelefono:'',
            provcontacto:'',
            provmail:'',
            provpagweb:'',
            provcodmon:'',
            proveedores:[]
        }
        this.renderEditable = this.renderEditable.bind(this)
    }    
    
    //Read
    read = _ => {
        const url = 'http://192.168.2.102:4000/indexprov'; //'http://192.168.2.102:4000/indexprov'
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
      const  product  = params;
    request                  
       .put('http://localhost:4000/actualizaprov/'+product.id)
       .set('Content-Type', 'application/json')
       
       .send({ idproveedores: this.state.idproveedores})
       .send({ provdesc: this.state.provdesc})
       .send({ provtipo: this.state.provtipo})
       .send({ provcuit: this.state.provcuit})        
       .send({ provcalle: this.state.provcalle})
       .send({ provnrocalle: this.state.provnrocalle})
       .send({ provpiso: this.state.provpiso})
       .send({ provdto: this.state.provdto})
       .send({ provcodpostal: this.state.provcodpostal})
       .send({ provlocalidad: this.state.provlocalidad})
       .send({ provprovincia: this.state.provprovincia})
       .send({ provtelefono: this.state.provtelefono})
       .send({ provcontacto: this.state.provcontacto})
       .send({ provmail: this.state.provmail})
       .send({ provpagweb: this.state.provpagweb})
       .send({ provcodmon: this.state.provcodmon})


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

export default UpdateComponent