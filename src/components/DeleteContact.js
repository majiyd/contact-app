import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import styles from '../css/components/Contact.module.css'

function mapStateToProps(state){
  return{

  }
}

const mapDispatchToProps = {
}

class DeleteContact extends PureComponent {
  deleteContact = ()=>{
    this.props.deleteContact(this.props.id)
  }
  render() {
    return (
      <div 
        className={styles.delete_contact}
        onClick={this.deleteContact}
      >
        X
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteContact);