// inside this file we will connect our redux STORE to main component
import Main from './Main'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router'

function mapStateToProps(state){//this will convert the state properties to props of component to which the STORE connects to.
    console.log(state)
    return {
        posts : state.posts,
        comments : state.comments
    }
}
// Now we will connnect our removePost() action creator to Main compenent such that it can work as 
// Dispatch() fn. which can trigger Reducer to change the state of STORE.

function mapDispatchToProps(dispatch){     
    return bindActionCreators(actions,dispatch)
}
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
export default App