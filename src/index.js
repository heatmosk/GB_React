import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App message="hello" />
  </React.StrictMode>,
  document.getElementById('root')
);