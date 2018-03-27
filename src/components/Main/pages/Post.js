import React, {Component} from 'react';
import posts from './posts-sample';
import Card from '../../lib/Card';

class Post extends Component {
    constructor (){
        super();
        this.state = {
            title:"",
            body:"",
            editMode: false,

        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.updateField = this.updateField.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount(){
        const title = posts[this.props.match.params._id].title;
        const body = posts[this.props.match.params._id].body;

        this.setState({
            title: title,
            body: body
        })
    }


    toggleEdit(){
        this.setState({
            editMode: !this.state.editMode
        })
    }

    updateField(field){
            this.setState({
                [field.target.id]: field.target.value,
            });
    }

    updatePost(e){
        e.preventDefault();
        posts[this.props.match.params._id].title = this.state.title;
        posts[this.props.match.params._id].body = this.state.body;
        this.setState({
            editMode: false,
        })
        //this.props.history.push('/');
    }

    deletePost(){
        delete posts[this.props.match.params._id];
        this.props.history.push('/');

    }

    render(){
        return (
            <div className="section">
                
                <Card title={this.state.title}> 
                    {this.state.body}
                </Card>
                
                <div className="row">
                    <div className="col s12 right-align">
                        <button className="btn " onClick={this.toggleEdit}>Edit Post <i className="material-icons right">edit</i></button>
                        <button className="btn red" onClick={this.deletePost}>Delete Post<i className="material-icons right ">delete</i></button>
                    </div>
                </div>
                
                {
                    this.state.editMode && 
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
                                <button className="btn " onClick={this.updatePost}>Update Post<i className="material-icons right">autorenew</i></button>
                            </div>   
                        </div>
                    </form>
                        </div>
                }
            </div>
        );
    }


}

export default Post;