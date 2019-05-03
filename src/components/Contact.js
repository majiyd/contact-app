import React, { PureComponent } from 'react'
import DeleteContact from './DeleteContact';
import styles from '../css/components/Contact.module.css'

class Contact extends PureComponent {
  render() {
    return (
      <div className={styles.contact}>
        <DeleteContact/>
        <div>Suleiman 08041933357</div>  
      </div>
    );
  }
}

export default Contact;