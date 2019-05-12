import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import Contact from '../components/Contact'
import Loader from '../components/Loader'
import textStyles from '../css/components/Text.module.css'

function mapStateToProps(state){
  return{
    contacts: state.contacts.contactList,
  }
}
class ContactsPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1
          className={[textStyles.center, textStyles.section_heading].join(
            " "
          )}
        >
          Contacts
        </h1>
        {(!Array.isArray( this.props.contacts) ||  !this.props.contacts.length) ? (
          /* <h1 className={[textStyles.center, textStyles.no_contact].join(" ")}>No Contacts Added!</h1> */ 

          <>
            <Loader type='large'/>
            <Loader />
            <Loader type='small'/>
          </>
        ) : (
          this.props.contacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))
        )}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(ContactsPage);