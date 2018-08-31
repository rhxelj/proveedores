import React from 'react'
import { Route } from 'react-router-dom'
// import Posts from './pages/Posts';
// import Post from './pages/Post';
import About from './pages/About';
// import NewPost from './pages/NewPost';

import AgregarMonedas from './pages/AgregarMonedas'

import ReadComponent from './pages/ReadComponent'
import UpdateComponent from './pages/UpdateComponent'
//import DeleteComponent from './pages/DeleteComponent'

import BorraMonedas from './pages/BorraMonedas'
import LeerMonedas from './pages/LeerMonedas'

const Main = () => (
    <main>
        <div className="container">
            <Route exact path="/" component={About}/>
            {/*<Route path="/posts/:_id" component={Post}/>
            <Route path="/new-post" component={NewPost}/> */}
            
            <Route path="/AgregarMonedas" component={AgregarMonedas}/>
            <Route path="/read" component={ReadComponent}/>
            <Route path="/update" component={UpdateComponent}/>
            {/* <Route path="/delete" component={DeleteComponent}/> */}
            <Route path="/delete" component={BorraMonedas}/>
            <Route path="/LeerMonedas" component={LeerMonedas}/>
            {/* <Route  component={About}/> para captar las rutas no definidas tengo que importar Switch */}

        </div>
    </main>
)

export default Main