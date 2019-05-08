import React, { PureComponent } from 'react'
import DeleteContact from './DeleteContact';
import styles from '../css/components/Contact.module.css'

class Contact extends PureComponent {
  render() {
    return (
      <div className={styles.contact}>
        <DeleteContact />
        <div style={{ 
            margin: "auto 0", 
            textTransform: "capitalize" 
          }}
        >
          {this.props.name} - {this.props.number}
        </div>
      </div>
    );
  }
}
Contact.defaultProps = {
  name: 'john',
  number: '0123456789'
}
export default Contact;