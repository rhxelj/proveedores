import React, {Component} from 'react';
import posts from './posts-sample';


class Post extends Component {
    constructor (){
        super();
        this.state = {
            title:"",
            body:""
        }
    }

    componentDidMount(){
        const title = posts[this.props.match.params._id].title;
        const body = posts[this.props.match.params._id].body;

        this.setState({
            title: title,
            body: body
        })
    }



    render(){
        return (
            <div className="section">
                <h1>{this.state.title}</h1>
                <p>{this.state.body}</p>
            </div>
        );
    }


}

export default Post;