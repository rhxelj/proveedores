import React, { Component} from 'react'
import request from 'superagent'

class CreateComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            provdesc:'',
            provtipo:1,
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

                products:[],
                // tipoprov:[{"idTipoProveed":1,"TipoProveedDesc":"Stock"},{"idTipoProveed":2,"TipoProveedDesc":"Servicios"},{"idTipoProveed":3,"TipoProveedDesc":"Impuestos"}],
        }
        this.updateField = this.updateField.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }    
    
 // Create
    addProduct = _=> { 
        const url = 'http://localhost:4000/agregaprov' 
        request
        .post(url)
        .set('Content-Type', 'application/json')
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
                console.log(res.status);
            });

    }   
    
  /*   read = _ => {
        const url = 'http://192.168.2.104:4000/indextipoprov' ; //'http://localhost:3000/data'

        request
        .get(url)
        .set('Content-Type', 'application/json')
            .then(res=> {
            // const products = JSON.parse(res.text)
            // this.setState({products: products})
            const tipoprov = JSON.parse(res.text)
            this.setState({tipoprov: tipoprov})
            console.log(tipoprov)
            console.log('oeoeoeoe')
            })
    } */

/*
'<label for="cuit"> C.U.I.T. </label>' +
    '<input type="text" name="provcuit" id="provcuit"/><BR>' +
    '<label for="provcalle"> Calle  </label>' +
    '<input type="text" name="provcalle" id="provcalle"/><BR>' +
    '<label for="provnrocalle"> Nro  </label>' +
    '<input type="number" step="any" name="provnrocalle" id="provnrocalle"/><BR>' +
    '<label for="provpiso"> Piso  </label>' +
    '<input type="text" name="provpiso" id="provpiso"/><BR>' +
    '<label for="provdto"> Dto  </label>' +
    '<input type="text" name="provdto" id="provdto"/><BR>' +
    '<label for="provcodpostal"> Código Postal  </label>' +
    '<input type="text" name="provcodpostal" id="provcodpostal"/><BR>' +
    '<label for="provlocalidad"> Localidad  </label>' +
    '<input type="text" name="provlocalidad" id="provlocalidad"/><BR>' +
    '<label for="provprovincia"> Provincia  </label>' +
    '<input type="text" name="provprovincia" id="provprovincia"/><BR>' +
    '<label for="provtelefono"> Teléfono  </label>' +
    '<input type="text" name="provtelefono" id="provtelefono"/><BR>' +
    '<label for="provcontacto"> Contacto </label>' +
    '<input type="text" name="provcontacto" id="provcontacto"/><BR>' +
    '<label for="provmail"> mail  </label>' +
    '<input type="text" name="provmail" id="provmail"/><BR>' +
    '<label for="provpagweb"> Página Web  </label>' +
    '<input type="text" name="provpagweb" id="provpagweb"/><BR>' +
    '<label for="provcodmon"> Moneda  </label>' +
    '<input type="text" name="provcodmon" id="provcodmon"/><BR>' +

*/
   
   
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
    //    this.read
    }
/*      tipo = _ => {const tipo = this.state.tipoprov.map(prov=>{
     
             <option value={prov.TipoProveedDesc}>{prov.TipoProveedDesc}</option>
             {console.log('dentro de tipo ' + prov.TipoProveedDesc)}
         })
        return(tipo)
    }  */

    render(){
      
        return( 
            // <div className="row">
            //  <div className="input-field col s12">
            //     <label htmlFor='Tipo'>Tipo</label>
            //     <select name="Tipo">
            //     this.tipo()
            //       {this.tipo()}
            //          {/*  {console.log(this.tipo())} */}
                  
            //     </select>
            //     </div>
            // </div>

            <div className="section">
                <h1>Nuevo Proveedor</h1>
                    
                <div className="row">
                    <form className="col s12" onSubmit={this.submitPost}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Descripción" id="provdesc" type="text" value={this.state.provdesc} onChange={this.updateField} />
                            </div>
                            <div className="row">
                                 <div className="input-field col s12">}
                                    <input placeholder="Tipo" id="provtipo" type="number" value={this.state.provtipo} onChange={this.updateField}/>  
                                    {/* <select name="Tipo">
                                        {this.tipo}
                                    </select> */}
                                    
                                </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="C.U.I.T." id="provcuit" type="text" value={this.state.provcuit} onChange={this.updateField}/>
                                </div>
 
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Calle" id="provcalle" type="text" value={this.state.provcalle} onChange={this.updateField}/>
                                </div>
                               
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Nro" id="provnrocalle" type="text" value={this.state.provnrocalle} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Piso" id="provpiso" type="text" value={this.state.provpiso} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Dto" id="provdto" type="text" value={this.state.provdto} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Cód.Postal" id="provcodpostal" type="text" value={this.state.provcodpostal} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Localidad" id="provlocalidad" type="text" value={this.state.provlocalidad} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Provincia" id="provprovincia" type="text" value={this.state.provprovincia} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Teléfono" id="provtelefono" type="text" value={this.state.provtelefono} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Contacto" id="provcontacto" type="text" value={this.state.provcontacto} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Mail" id="provmail" type="text" value={this.state.provmail} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Pág.web" id="provpagweb" type="text" value={this.state.provpagweb} onChange={this.updateField}/>
                                </div>
                                <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Moneda" id="provcodmon" type="text" value={this.state.provcodmon} onChange={this.updateField}/>
                                </div>
                                
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
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