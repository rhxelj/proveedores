import React from 'react'
import { Route } from 'react-router-dom'
// import Posts from './pages/Posts';
// import Post from './pages/Post';
import About from './pages/About';
// import NewPost from './pages/NewPost';

import CreateComponent from './pages/CreateComponent'
import ReadComponent from './pages/ReadComponent'
import UpdateComponent from './pages/UpdateComponent'
//import DeleteComponent from './pages/DeleteComponent'
import BorraMonedas from './pages/BorraMonedas'
const Main = () => (
    <main>
        <div className="container">
            <Route exact path="/" component={About}/>
            {/*<Route path="/posts/:_id" component={Post}/>
            <Route path="/new-post" component={NewPost}/> */}
            
            <Route path="/create" component={CreateComponent}/>
            <Route path="/read" component={ReadComponent}/>
            <Route path="/update" component={UpdateComponent}/>
            {/* <Route path="/delete" component={DeleteComponent}/> */}
            <Route path="/delete" component={BorraMonedas}/>
        </div>
    </main>
)

export default Main