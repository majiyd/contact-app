import React, { PureComponent } from 'react';
import textStyles from '../css/components/Text.module.css'

class ContactsPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1 className={textStyles.center}>This is the Contact Page</h1>
      </React.Fragment>
    );
  }
}

export default ContactsPage;