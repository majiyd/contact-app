import React, {PureComponent}from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import App from "./App/App"
import './css/reset.css'

class Root extends PureComponent{
  render(){
    console.log(store);
    return(
      <App />
    )
  }
}
ReactDOM.render(
    <Root />, 
  document.getElementById('root')
);
