import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {inputContactName, inputContactNumber} from "../redux/actions/actionCreators/contactActionCreators";
import {addContactActionCreator} from '../redux/actions/actionCreators/thunkActionCreators';
import Loader from "../components/Loader";
import textStyles from '../css/components/Text.module.css'
import formStyles from '../css/components/Form.module.css'
import buttonStyles from '../css/components/Button.module.css'

function mapStateToProps(state){
  return{
    newContactName: state.contacts.newContact.name,
    newContactNumber: state.contacts.newContact.phoneNumber,
    isAddingContact: state.contacts.isAddingContact
  }
}
const mapDispatchToProps = {
  inputContactName,
  inputContactNumber,
  addContactActionCreator,
}
class AddNewContact extends PureComponent {
  handleInputContactName = (e) => {
    let value = e.target.value
    this.props.inputContactName(value)
  }
  handleInputContactNumber = (e) => {
    let value = e.target.value
    this.props.inputContactNumber(value)
  }
  handleAddNewContact = (e) => {
    //some client side validation,
    //not recommended in real life
    let newContactName = document.getElementById('inputContactName').value.trim()
    let newContactNumber = document.getElementById('inputContactNumber').value.trim()
    
    if(newContactNumber === '' ){
      document.getElementById('inputContactNumber').value = ''
    }else if(newContactName === ''){
      document.getElementById('inputContactName').value = ''
    }else{
      e.preventDefault()
      // this.props.addNewContact(newContactName, newContactNumber)
      this.props.addContactActionCreator({newContactName, newContactNumber})
      document.getElementById('inputContactName').value = ''
      document.getElementById('inputContactNumber').value = ''
    }
    
  }
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
            id='inputContactName' 
            className={formStyles.input} 
            placeholder='Name:'
            required
            onInput={this.handleInputContactName}
          />
          <input
            id='inputContactNumber'
            className={formStyles.input} 
            placeholder='Number:'
            required
            onInput={this.handleInputContactNumber}
          />
          <button onClick={this.handleAddNewContact} className={buttonStyles.form_button}>
            {this.props.isAddingContact ? <Loader type='small' /> : 'Add Contact'}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewContact);