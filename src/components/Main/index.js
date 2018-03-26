import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Post from './pages/Post';
import About from './pages/About';

const Main = () => (
    <main>
        <div className="container">
            <Route exact path="/" component={Posts}/>
            <Route path="/posts/:_id" component={Post}/>
            <Route path="/about" component={About}/>
        </div>
    </main>
);

export default Main;