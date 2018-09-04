import React from 'react'
import { Route } from 'react-router-dom'
// import Posts from './pages/Posts';
// import Post from './pages/Post';
import About from './pages/About';
// import NewPost from './pages/NewPost';

// import AgregarMonedas from './pages/AgregarMonedas'

import ReadComponent from './pages/ReadComponent'
import UpdateComponent from './pages/UpdateComponent'
//import DeleteComponent from './pages/DeleteComponent'

import BorrarMonedas from './pages/BorrarMonedas'
import LeerMonedas from './pages/LeerMonedas'
import AgregarMonedas from './pages/AgregarMonedas'
import ModificarMonedas from './pages/ModificarMonedas'

const Main = () => (
    <main>
        
        {/* 
            Para poder usar la opción que si no encuentra la ruta especificada tire un error. tengo que usar swicth como wrapper
            de lo contrario el error se va a mostrar en todas las paginas 

            <Route component={Error}/> 
            uso esta ruta para cuando no coincide ninguna ruta (hay que hacer el componente Error)
        */}
        
        <div className="container"> 
            <Route exact path="/" component={About}/>
            {/*<Route path="/posts/:_id" component={Post}/>
            <Route path="/new-post" component={NewPost}/> */}
            
            <Route path="/AgregarMonedas" component={AgregarMonedas}/>
            {/* <Route path="/read" component={LeerMonedas}/> */}
            <Route path="/ModificarMonedas" component={ModificarMonedas}/>
            {/* <Route path="/delete" component={DeleteComponent}/> */}
            <Route path="/BorrarMonedas" component={BorrarMonedas}/>
            <Route path="/LeerMonedas" component={LeerMonedas}/>
            {/* <Route  component={About}/> para captar las rutas no definidas tengo que importar Switch */}
            
        </div>
    </main>
)

export default Main