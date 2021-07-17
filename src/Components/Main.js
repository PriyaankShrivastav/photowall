import React, {Component} from 'react';
import Single from './Single';
import Addphoto from './AddPhoto';
import Photowall from './Photowall';
import {Link, Route} from 'react-router-dom'

class Main extends Component{

    componentDidMount(){
        this.props.startLoadingPost()
        this.props.startLoadingComments()
    }

    render(){ console.log('Main...', this.props)
        return (
            <div>
                <h1><Link to='/'>PhotoWall</Link></h1>
                <Route exact path ="/" render ={ () => ( // Route matches the present url to different route paths and the 
                                                         // matching path's route is rendered
                <div>                                         
                    <Photowall {...this.props} />
                </div>)}/> 
                  <Route exact path ="/addPhoto" render ={ () => (
                  <Addphoto {...this.props}  />)} />
                  <Route path='/single/:id' render = {(params) => (  // this id is matched to url after single/ and this
                                                                     // can be accessed through params.id
                     <div><Single {...this.props} {...params}/></div>
                 )}/> 
            </div>
        )
    }
}
export default Main;

// History Prop ->  Now that we have the user's info showing, we need to add the functionality to redirect to the
// /users route after deleting the user through the API. Since we need to redirect after the API returns a response,
// we can't just use Link to go back. We need to manually do it. React Router makes this easy by passing a history
// object into each route as a prop. This history object lets us manually control history of the browser. Since React 
//Router is made to change what we see based off of the current URL, the history object can gives us fine-grained 
//control of when and where certain pieces of the application are shown.