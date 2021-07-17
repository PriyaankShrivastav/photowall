import {database} from '../db/config'
// actions are javascript object.
//Action Creators are functions that returns action(Object) to Reducer.
// removePost Buttons actionCreator

export function startAddingPosts(post){
    return (dispatch) => {
        return database.ref('posts').update({[post.id] : post}).then(() =>{
            dispatch(addPost(post))
        })
    }
}

export function startLoadingPost(){
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function startRemovingPost(index, id){
    return (dispatch)=>{
        return database.ref(`posts/${id}`).remove().then(()=>{
            dispatch(removePost(index))
        })
    }
}

export function startAddingComment(comment, postId){
    return (dispatch) => {
        return database.ref('comments/'+postId).push(comment).then(() =>{
            dispatch(addComment(comment, postId))
        })
    }
}

export function startLoadingComments(){
    return (dispatch) =>{
        return database.ref('comments').once('value').then((snapshot)=>{
            let comments = {}
            snapshot.forEach((childSnapshot) =>{
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        })
    }
}

export function loadComments(comments){
    return {
        type : 'LOAD_COMMENTS',
        comments
    }
}

export function removePost(index){   // index will contain id of the post to be removed 
    console.log('removePostAction')
    return {
        type : 'REMOVE_POST',
        index // same as ES5 index : index
    }

}
export function addPost(post){   // index will contain post to be added 
    console.log('addPostAction')
    return {
        type : 'ADD_POST',
        post  // same as ES5 post : post
    }
}
export function addComment(comment, postId){   // comment(arg) will contain the comment to be added
   console.log('addCommentAction')
    return{
        type : 'ADD_COMMENT',
        comment,  // same as ES5 comment : comment
        postId
    }
}

export function loadPosts(posts){
    return {
        type: 'LOAD_POSTS',
        posts
    }
}