import React, { Component } from 'react'
import request from 'superagent'

class CreateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            products: [],
            precio: [10, 20, 30, 50, 100]
        }
        this.updateField = this.updateField.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Create
    addProduct = _ => {
        const url = 'http://localhost:3000/data'
        request
            .post(url)
            .set('Content-Type', 'application/json')
            .send({ name: this.state.name })
            .send({ price: this.state.value })
            .set('X-API-Key', 'foobar')
            .then(function (res) {
                // res.body, res.headers, res.status
                console.log(res.status);
            });
        // this.getProducts();
    }

    // change(event){
    //     var name  = event.target.name
    //     var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    //     this.setState({
    //       [name]: value
    //     },()=>{
    //       console.log(this.state)
    //       this.filterData()
    //     })
    //   }


    updateField(field) {
        this.setState({
            [field.target.id]: field.target.value,
        })
        console.log('ESTADO :' + field.target.id + ' Valor :' + field.target.value)
    }

    submitPost(e) {
        e.preventDefault()
        //   const name = this.state.name
        //   const price =  this.state.price

        this.addProduct()
        alert("Agregado Correctamente")
        this.props.history.push('/');
        console.log('Ejecute Submit')
        // alert('nombre :' +name+' '+ 'Precio :'+price)

    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    componentDidMount() {
    }

    render() {
        const precioLista = this.state.precio.map(pri =>

            <option value={pri}>
                Precio {pri}
                {/* {console.log('Precio dentro de precioLista: ' + pri)} */}
            </option>
        )
        return (
            
            <div>
                <h1>Nuevo Probeedor</h1>
                <input placeholder="Nombre" id="name" type="text" value={this.state.name} onChange={this.updateField} />
                <label>Precio</label>
                <select className="browser-default" onChange={this.handleChange}>
                    <option value=""></option>
                    {precioLista}
                </select>
                <div className="input-field col s12">
                           <button className="btn">Create Post</button>
                </div>
            </div>
        )
    }
}



export default CreateComponent