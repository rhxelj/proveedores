import React from 'react';
import posts from './posts-sample';
import Card from '../../lib/Card';


const Posts = () => {
    function postGenerator(postKey){
        const post = posts[postKey];
        return (
            <Card 
                truncate
                key={postKey} 
                title={post.title}  
                action={{
                    href: `/posts/${postKey}`,
                    label: 'Go to Post...',
                }}>
                {post.body}
            </Card>
        );
    }
    return(
        <div className="section">
            <h1>Posts</h1>
            <p>This is the Posts Page</p>
            <div className="row">
                <div className="col s12">
                    {Object.keys(posts).map(postGenerator)}
                </div> 
            </div>
        </div>
    )
}
export default Posts;