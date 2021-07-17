import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component{
    render(){console.log('Single.js', this.props)
        const {match, posts} = this.props    // extracted match and posts from this.props to objects match and posts
        const id = Number(match.params.id)   // match object has params object inside it, params has id inside it
        const post = posts.find((post) => post.id===id)
        const comment = this.props.comments[id] || []
        const index   = posts.findIndex((post) => post.id===id)
        return <div className='single-photo'>
                    <Photo post={post} {...this.props} index={index}/>
                    <Comments  startAddingComment={this.props.startAddingComment} comments = {comment} id={id}/>  
                </div>
    }
}
export default Single