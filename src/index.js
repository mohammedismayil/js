import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserCards from "./Components/Cards"
import Test from './Components/Test';
console.log('before rendering')
ReactDOM.render(
 <Test/>,
  document.getElementById('myApp')
);

console.log('after rendering')
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
