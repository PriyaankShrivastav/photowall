import React, {Component} from 'react'

class AddPhotos extends Component{
   constructor(){
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event){
      event.preventDefault();
      const link = event.target.elements.Link.value;
      const description = event.target.elements.Description.value;
      const post = {
         id : Number(new Date()),
         description: description,
         imageLink: link
      }
      if(description && link){
         this.props.startAddingPosts(post)
         this.props.history.push('/')
      }
   }
   render(){ console.log('AddPhoto.js', this.props)
            return <div>
                       <div className='form'>
                       <form onSubmit={this.handleSubmit}>
                          <input type='text' placeholder='Link' name='Link'></input>
                          <input type='text' placeholder='Description' name='Description'></input>
                          <button>Post</button>
                       </form>
                       </div>
                   </div>}
}
export default AddPhotos