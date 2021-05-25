import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AutoComplete from './components/AutoComplete';
/* import App from './App'; */
/* import ListOfThings from './components/ListOfThings'; */
/* import InputControl from './components/InputControl';  */


ReactDOM.render(
  <React.StrictMode>
   {/*  <App />
     <InputControl/>
    <ListOfThings/>  */}
    <AutoComplete/>
  </React.StrictMode>,
  document.getElementById('root')
);



