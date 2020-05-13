import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import employeeReducer from './reducers/employeeReducer';
import {Provider} from 'react-redux'

let initialState = [{id:1,name:'John Doe',grade:1,dept:'React Redux School'},{id:2,name:'Jane Doe',grade:2,dept:'React Redux School'}
,{id:3,name:'Terry Adams',grade:3,dept:'React Redux School'},{id:4,name:'Jenny Smith',grade:4,dept:'React Redux School'}];

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
