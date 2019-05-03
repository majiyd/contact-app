import React, { PureComponent } from 'react';
import Contact from '../components/Contact'
import textStyles from '../css/components/Text.module.css'

class ContactsPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1 className={[
          textStyles.center, 
          textStyles.section_heading
          ].join(' ')
        }>
          Contacts
        </h1>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </React.Fragment>
    );
  }
}

export default ContactsPage;