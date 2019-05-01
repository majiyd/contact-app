import React, { Component } from "react";
import ContactsPage from '../containers/ContactsPage';
import AddNewContact from '../containers/AddNewContact';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome To Contact App</h1>
        <ContactsPage />
        <AddNewContact />
      </React.Fragment>
    );
  }
}
export default App;
