import React, { Component} from 'react'
import request from 'superagent'


class CreateComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            idtipomoneda:'',
            tipomonedasdescripcion: '',
            tipomonedascotizacion:0.00,
                            products:[],
        }
        this.updateField = this.updateField.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }    
    
 // Create
    addProduct = _=> { 
        const url = 'http://192.168.2.102:4000/agregamonedas' 
        request
        .post(url)
        .set('Content-Type', 'application/json')
        .send({ idtipomonedas: this.state.idtipomonedas})
        .send({ tipomonedasdescripcion: this.state.tipomonedasdescripcion})
        .send({ tipomonedascotizacion: this.state.tipomonedascotizacion})
        
        .set('X-API-Key', 'foobar')
        .then(function(res) {
        // res.body, res.headers, res.status
                console.log(res.status);
            });

    }    


   
    updateField(field){
        this.setState({
            [field.target.id]: field.target.value,
        })
        console.log('ESTADO :'+field.target.id + ' Valor :'+field.target.value)
    }

    submitPost(e){
         e.preventDefault()
        //   const name = this.state.name
        //   const price =  this.state.price
        
        this.addProduct()
        alert("Agregado Correctamente")
        this.props.history.push('/');
        console.log('Ejecute Submit')
        // alert('nombre :' +name+' '+ 'Precio :'+price)

    }

    componentDidMount(){
    }
    
    render(){
        console.log('hora don pepe');
        return( 
            <div className="section">
                <h1>Nuevo Proveedor</h1>
                    
                <div className="row">
                    <form className="col s12" onSubmit={this.submitPost}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Abreviatura" id="idtipomonedas" type="text" value={this.state.idtipomonedas} onChange={this.updateField} />
                            </div>
                            <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Descripción" id="tipomonedasdescripcion" type="text" value={this.state.tipomonedasdescripcion} onChange={this.updateField} />
                            </div>   
                            <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Cotización" id="tipomonedascotizacion" type="" value={this.state.tipomonedascotizacion} onChange={this.updateField} />
                            </div>   
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="btn">Create Post</button>
                            </div>   
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateComponent