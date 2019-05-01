import React, {PureComponent}from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App"
import './css/reset.css'

class Root extends PureComponent{
  render(){
    return(
      <App />
    )
  }
}
ReactDOM.render(
    <Root />, 
  document.getElementById('root')
);
