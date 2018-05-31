import React, { Component} from 'react'
import request from 'superagent'

class CreateComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
                name:'',
                price:'',
                products:[],
        }
        this.updateField = this.updateField.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }    
    
 // Create
    addProduct = _=> { 
        const url = 'http://localhost:3000/data' 
        request
        .post(url)
        .set('Content-Type', 'application/json')
        .send({ name: this.state.name})
        .send({ price: this.state.price})
        .set('X-API-Key', 'foobar')
        .then(function(res) {
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
        
        return( 
            <div className="section">
                <h1>Nuevo Probeedor</h1>
                    
                <div className="row">
                    <form className="col s12" onSubmit={this.submitPost}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Nombre" id="name" type="text" value={this.state.name} onChange={this.updateField} />
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Precio" id="price" type="text" value={this.state.price} onChange={this.updateField}/>
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