import React from 'react';
import {Link} from 'react-router-dom';

function Photo(pp){
    console.log('Photo.js')
    const post = pp.post;
        return <figure className='figure'>
            <Link to={`/single/${post.id}`}><img className='photo' src= {post.imageLink} alt={post.description}/></Link>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
            <button  onClick={
                () => {pp.startRemovingPost(pp.index, post.id)
                       pp.history.push('/')}
            }>Remove</button>
            <Link className="button" to={`/single/${post.id}`}>
                 <div className='comment-count'>
                     <div className='speech-bubble'></div>
                     {pp.comments[post.id] ?pp.comments[post.id].length : 0 }
                </div>
            </Link>
            </div>
        </figure>
}

export default Photo