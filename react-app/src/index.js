import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';

ReactDOM.render(
    <Provider><Main></Main></Provider>

, 
document.getElementById('root'));

