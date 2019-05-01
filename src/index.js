import React, {PureComponent}from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import App from "./App/App"
import './css/reset.css'
import {applyClickedOnAddContactLink} from './redux/actions/actionCreators/uiActionCreators'

class Root extends PureComponent{
  render(){
    store.dispatch(applyClickedOnAddContactLink())
    return(
      <App />
    )
  }
}
ReactDOM.render(
    <Root />, 
  document.getElementById('root')
);
