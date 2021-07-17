// this file makes the postReducer fn. which initializes the state in redux STORE to Posts object
// action just states what to do, but its Reducer which knows how to do things based on action to modify states of STORE.
import Posts from '../data/posts'
import {combineReducers} from 'redux'

//postReducer
function posts(state = Posts, action) {   //state = currentState,  action = triggered event
    console.log('postReducer')
    switch (action.type){
        case 'REMOVE_POST' : return [...state.slice(0,action.index), ...state.slice(action.index+1)]
        case 'ADD_POST'    : return [...state, action.post]
        case 'LOAD_POSTS'  : return action.posts
        default  : return state
    }
     // this is the updated state and will update on redux STORE
}
//comment reducer
function comments(state={}, action){
    switch (action.type){
        case 'ADD_COMMENT' : 
        if(!state[action.postId])
         { return {...state, [action.postId]:[action.comment]} }
       else{ 
           return {...state, [action.postId]:[...state[action.postId], action.comment]} }
        case 'LOAD_COMMENTS': return action.comments   
        default  : return state
}
}

const rootReducer = combineReducers({posts, comments})//these names should be same as state's property in mapStateToProps
export default rootReducer



// The connect() function generates a wrapper component that subscribes to the store. 
// When an action is dispatched, the wrapper component's callback is notified. It then runs your mapState function, 
// and shallow-compares the result object from this time vs the result object from last time (so if you were to rewrite 
// a redux store field with its same value, it would not trigger a re-render). If the results are different, then it
// passes the results to your "real" component" as props.