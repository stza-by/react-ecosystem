import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log('Current build mode:', process.env.NODE_ENV);

ReactDOM.render(<App />, document.getElementById('root'));
