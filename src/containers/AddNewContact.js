import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {inputContactName, inputContactNumber, addNewContact} from '../redux/actions/actionCreators/contactActionCreators'
import textStyles from '../css/components/Text.module.css'
import formStyles from '../css/components/Form.module.css'
import buttonStyles from '../css/components/Button.module.css'

function mapStateToProps(){
  return{}
}
const mapDispatchToProps = {
  inputContactName,
  inputContactNumber,
  addNewContact
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
    e.preventDefault()
    this.props.addNewContact()
    document.getElementById('inputContactName').value = ''
    document.getElementById('inputContactNumber').value = ''
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
          <button onClick={this.handleAddNewContact} className={buttonStyles.form_button}>Add Contact</button>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewContact);