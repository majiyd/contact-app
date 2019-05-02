import React, { Component } from "react";
import {connect} from 'react-redux'
import Container from '../containers/Container'
import ContactsPage from '../containers/ContactsPage';
import AddNewContact from '../containers/AddNewContact';
import Navbar from '../containers/Navbar';


function mapStateToProps(state){
  return{
    isContactsPageVisible: state.ui.pages.isContactsPageVisible
  }
}
/**
 * @desc main App, all application pages are rendered here
 */
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1>Welcome To Contact App</h1>
        <Container>
          {this.props.isContactsPageVisible ? 
            <ContactsPage /> : <AddNewContact />
          }
        </Container>
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps)(App);
