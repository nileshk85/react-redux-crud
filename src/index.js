import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import employeeReducer from './reducers/employeeReducer';
import {Provider} from 'react-redux'

let initialState = [{id:1,name:'Yogesh K',grade:1,dept:'Production'},{id:2,name:'Vinay K',grade:2,dept:'Research'}
,{id:3,name:'Mangesh K',grade:3,dept:'Engineering'},{id:4,name:'Nilesh K',grade:4,dept:'IT'}];

if( localStorage.getItem("employees") === null)
localStorage.setItem('employees',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('employees'));

const store = createStore(employeeReducer,initialState);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
