import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import Contact from '../components/Contact'
import Loader from '../components/Loader'
import textStyles from '../css/components/Text.module.css'

function mapStateToProps(state){
  return{
    contacts: state.contacts.contactList,
    isFetchingContacts: state.contacts.isFetching
  }
}
class ContactsPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1
          className={[textStyles.center, textStyles.section_heading].join(" ")}
        >
          Contacts
        </h1>
        {/**
          The lines below may be very confusing. i'm making use of two ternary operators.
          The first one checks if contacts are being fetched and displays the Loader component, otherwise
          The second ternary operators checks if there are contacts in the state and displays the no contact message if there are none
        */}
        {this.props.isFetchingContacts ? (
          <Loader />
        ) : !Array.isArray(this.props.contacts) ||
          !this.props.contacts.length ? (
          <h1
            className={[textStyles.center, textStyles.no_contact].join(" ")}
          >
            No Contacts!
          </h1>
        ) : (
          this.props.contacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.phoneNumber}
            />
          ))
        )}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(ContactsPage);