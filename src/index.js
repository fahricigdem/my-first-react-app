import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
 
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

let counter = 5;

function show() {
  counter++;
  const el = <h1>{counter}</h1>;
  ReactDOM.render(
    el, document.getElementById('root1')
  );
}

setInterval(show, 1000); 


//ReactDOM.render(<p><hr/>erste hr<hr/></p>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
