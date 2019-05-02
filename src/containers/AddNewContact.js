import React, { PureComponent } from 'react';
import textStyles from '../css/components/Text.module.css'

class AddNewContact extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1 className={textStyles.center}>This is where new contacts are added</h1>
      </React.Fragment>
    );
  }
}

export default AddNewContact;