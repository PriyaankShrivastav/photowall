import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import './Styles/Stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'  // rootReducer name reason will be cleared in latter videos
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {database} from './db/config'

console.log('index.js110')
const store = createStore(rootReducer, applyMiddleware(thunk))     // postReducer got connected to the Redux STORE
console.log('index.js12')
// ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
// Now we can access Main Component connected to redux STORE through App Component