import React, { PureComponent } from 'react';
import textStyles from '../css/components/Text.module.css'
import formStyles from '../css/components/Form.module.css'
import buttonStyles from '../css/components/Button.module.css'

class AddNewContact extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1 className={[
          textStyles.center, 
          textStyles.section_heading
          ].join(' ')
        }>
          Add New Contact
        </h1>
        <form className={formStyles.form}>
          <input 
            className={formStyles.input} 
            placeholder='Name:'
            required
          />
          <input 
            className={formStyles.input} 
            placeholder='Number:'
            required
          />
          <div><button className={buttonStyles.form_button}>Add Contact</button></div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddNewContact;