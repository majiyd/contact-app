import React, { PureComponent } from 'react';
import styles from '../css/components/Contact.module.css'

class DeleteContact extends PureComponent {
  render() {
    return (
      <div className={styles.delete_contact}>X</div>
    );
  }
}

export default DeleteContact;