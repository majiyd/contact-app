import React, { Component } from "react";
import ContactsPage from '../containers/ContactsPage';
import AddNewContact from '../containers/AddNewContact';
import Navbar from '../containers/Navbar';

/**
 * @desc main App, all application pages are rendered here
 */
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1>Welcome To Contact App</h1>
        <ContactsPage />
        <AddNewContact />
      </React.Fragment>
    );
  }
}
export default App;
