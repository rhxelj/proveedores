import React, { Component} from 'react'
import request from 'superagent'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class LeerMonedas extends Component {
    constructor(props){
        super(props)
        this.state = {
            TipoMonedas:[],
            // filtrado:[],
            filtered:'',
            toggle: true,
            id:''
        }
        this.search = this.search.bind(this)
        this.toggle = this.toggle.bind(this);
    }    
    

    toggle(event){
        this.setState(prevState => ({
            toggle: !prevState.toggle
          }))
    }
    
    //Read
    read = _ => {
        const url = 'http://localhost:4000/leermonedas'
        request
        .get(url)
        .set('Content-Type', 'application/json')
            .then(res=> {
            const TipoMonedas = JSON.parse(res.text)
            this.setState({TipoMonedas: TipoMonedas})
            // this.setState({filtrado: TipoMonedas})
            })
    }

    // //Delete
    //   deleteProduct = (id)=> {
        
    //     const { moneda } = this.state;
    //     request
    //       .delete('http://localhost:3000/data/'+id)
    //       .set('Content-Type', 'application/json')
    //       //.set('X-API-Key', 'foobar')
    //       .then(function(res) {
    //     // res.body, res.headers, res.status
    //       })
    //       //alert("Borrado")
    //       this.toggle()
    //       this.read()
    //   }
    
    // listado = _=>{
    //     let TipoMonedas = this.state.TipoMonedas.filter((moneda)=>{
    //         return moneda.name.toLowerCase().indexOf(this.state.filtered.toLowerCase()) !== -1
    //     })
    //     const listado = TipoMonedas.map((moneda)=> 
           
    //             <li key={moneda.id}>{moneda.name}  
    //                 {/* <button onClick={()=>this.deleteProduct(moneda.id)}>Borrar</button> */}
    //                 <button className=" red accent-4" onClick={()=>{
    //                     this.setState({id:moneda.id})
    //                     this.toggle()}}>Borrar</button>

    //             </li>
              
           
    //     )
    //     return listado
    // } 
    listado = _=>{
        let TipoMonedas = this.state.TipoMonedas
        // let TipoMonedas = this.state.TipoMonedas.filter((moneda)=>{
        //     return moneda.name.toLowerCase().indexOf(this.state.filtered.toLowerCase()) !== -1
        // })
        const listado = TipoMonedas.map((moneda)=> 
                <tr>
                    <td>{moneda.idTipoMonedas}</td>
                    <td>{moneda.TipoMonedasDescripcion}</td>
                    <td>{moneda.TipoMonedasCotizacion}</td>
                    {/* <td>
                        <button className=" red accent-4" onClick={()=>{
                        this.setState({id:moneda.id})
                        this.toggle()}}>Borrar</button>
                    </td> */}
                </tr>
                    
        )
        return listado
    }
    
    search(event){
        var name  = event.target.name
        var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
        this.setState({filtered: value})
    }

    componentDidMount(){
        this.read()
    }

    render(){
        
        return( 
            <div>
                <h1>Listado de Monedas</h1>
                <input onChange={this.search} type="text" value={this.state.filtered}/>
                
                {this.state.toggle 
                ?
                    <table className="striped">
                        <thead>
                        <tr>
                            <th>idTipoMonedas</th>
                            <th>TipoMonedasDescripcion</th>
                            <th>TipoMonedasCotizacion</th>
                        </tr>
                        </thead>

                        <tbody>
                            {this.listado()}
                        </tbody>
                    </table>
                :
                <div className="row s12  card-panel hoverable">
                    <div className="col s6"> Esta seguro que desea Borrar ? no se puede volver atras ...</div>
                    <div className="col s6 offset-s10">
                        <button className=" red accent-4" onClick={()=>this.deleteProduct(this.state.id)}>Borrar</button>
                        <button className=" blue accent-4" onClick={()=>this.toggle()}>Cancelar</button>
                    </div>
                </div> 
                }
                {/* <ul>
                    {this.state.toggle ?
                        this.listado() :
                        <div>Esta seguro que desea Borrar ? no se puede volver atras ...
                        <button className=" red accent-4" onClick={()=>this.deleteProduct(this.state.id)}>Borrar</button>
                        <button className=" blue accent-4" onClick={()=>this.toggle()}>Cancelar</button>
                        </div>
                    }
                </ul> */}
            </div>
        )
    }
}

export default LeerMonedas