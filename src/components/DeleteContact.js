import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {deleteContact} from '../redux/actions/actionCreators/thunkActionCreators'
import Loader from './Loader'
import styles from '../css/components/Contact.module.css'

function mapStateToProps(state){
  return{
    
  }
}

const mapDispatchToProps = {
  deleteContact
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
        {this.props.isDeleting ? <Loader type="small"/> : "X"}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteContact);