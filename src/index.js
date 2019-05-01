import React, {PureComponent}from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import App from "./App/App"
import './css/reset.css'
import {applyClickedOnAddContactLink} from './redux/actions/actionCreators/uiActionCreators'

/**
 * @desc This is the entry point of the app, it contains the root container.
 * @import App container, redux store, and reset.css
 */
class Root extends PureComponent{
  /**
   * @desc This is the root container, it contains the App container and redux provider and store.
   * @returns App container
   */
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
