import React, { Component} from 'react'
import request from 'superagent'

import IpServidor from './VariablesDeEntorno'

class AgregarMonedas extends Component {
    constructor(props){
        super(props)
        this.state = {
            idTipoMonedas:'',
            TipoMonedasDescripcion:'',
            TipoMonedasCotizacion:0.00,
        }
        this.updateField = this.updateField.bind(this);
        this.submitMoneda = this.submitMoneda.bind(this);
    }    

    // Agregar Moneda
    addMoneda = _=> { 
        const url = IpServidor +'/agregarmonedas' 
        request
        .post(url)
        .set('Content-Type', 'application/json')
        .send({ idTipoMonedas: this.state.idTipoMonedas})
        .send({ TipoMonedasDescripcion: this.state.TipoMonedasDescripcion})    
        .send({ TipoMonedasCotizacion: this.state.TipoMonedasCotizacion})
        .set('X-API-Key', 'foobar')
        .then(function(res) {
        // res.body, res.headers, res.status
            //     console.log('res.status  ' + res.status);
            //     console.log('esta aca');
            //     alert('Agrego correctamente');
        })

        .catch(err => {
            if (err.status === 409) 
                    {
                    alert('Código de Moneda EXISTENTE  ') 
                    }
                    else
                    {
                    if (err.status === 410) 
                            {
                            alert('Código de Moneda no puede tener más de 4 dígitos ') 
                            }     
               else { console.log('Error nro :  ' + err.status)}
                        }
            })
    }   
   
    updateField(field){
        this.setState({
            [field.target.id]: field.target.value,
        })
        console.log('ESTADO :'+field.target.id + ' Valor :'+field.target.value)
    }

    submitMoneda(e){
        e.preventDefault()
        this.addMoneda()
      //  this.props.click()
    }

    componentDidMount(){
  
    }


    render(){
      
        return( 
            <div className="section">
                <div className="row">
                    <form className="col s12" onSubmit={this.submitMoneda}>
                        <div className="row">
                            <div className="input-field col s5">
                                <input placeholder="Código" id="idTipoMonedas" type="text" value={this.state.idTipoMonedas} onChange={this.updateField} />
                            </div>
                            <div className="row">
                                 <div className="input-field col s12">
                                    <input placeholder="Descripción" id="TipoMonedasDescripcion" type="text" value={this.state.TipoMonedasDescripcion} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="Cotización" id="TipoMonedasCotizacion" type="number" value={this.state.TipoMonedasCotizacion} onChange={this.updateField} step="any"/>  
                                    </div>
                                </div>
                            </div> 
                        </div>
                         
                        <div className="card-action">
                            <div className="row">
                                <div className="input-field col s12">
                                    <button onClick={this.submitMoneda} className="btn">Agregar Moneda</button>
                                    <a className="btn" href="#" onClick={this.props.click}>Cancelar</a>
                                </div>   
                            </div>
                        </div>
                           
                    </form>
                </div>
            </div>
        )
    }
}

export default AgregarMonedas