import React, {Component} from 'react';
import posts from './posts-sample';


class NewPost extends Component {
    constructor(){
        super();
        this.updateField = this.updateField.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }

    state ={
        title: '',
        body: '',
    }
    
    updateField(field){
        this.setState({
            [field.target.id]: field.target.value,
        });
    }
    
    submitPost(e){
        e.preventDefault();
        const id = this.state.title;
        posts[id] = this.state;
        this.props.history.push('/');

    }
    
    render() {
        return (
            <div className="section">
                <h1>New Post</h1>
                    
                <div className="row">
                    <form className="col s12" onSubmit={this.submitPost}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Post title" id="title" type="text" value={this.state.title} onChange={this.updateField} />
                            </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea className="materialize-textarea" placeholder="Enter your post..." id="body" value={this.state.body} onChange={this.updateField}/>
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
};

export default NewPost;