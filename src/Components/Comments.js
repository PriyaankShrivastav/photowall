import React, {Component} from 'react'

class Comments extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()   // this prevent default refreshing of page upon form submission
        const comment = event.target.elements.comment.value  // target refers to form we just submitted
        this.props.startAddingComment(comment, this.props.id)
        event.target.elements.comment.value = ''
    }
    render(){
        return <div className='comment'>
                  {     
                      this.props.comments.map((comment, index) =>{return (<p key={index}>{comment}</p>)})
                  }
                  <form className='comment-form' onSubmit={this.handleSubmit}>
                      <input type='text' placeholder='Comments' name='comment'></input>
                      <input type='Submit' hidden></input>
                  </form>
               </div>
    }
}
export default Comments