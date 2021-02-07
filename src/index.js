import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./store";
import App from './App';

console.log('Current build mode:', process.env.NODE_ENV);

ReactDOM.render(
    <Provider store={configureStore(process.env.NODE_ENV)}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
