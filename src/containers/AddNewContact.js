import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {inputContactName, inputContactNumber} from '../redux/actions/actionCreators/contactActionCreators'
import textStyles from '../css/components/Text.module.css'
import formStyles from '../css/components/Form.module.css'
import buttonStyles from '../css/components/Button.module.css'

function mapStateToProps(){

}
const mapDispatchToProps = {
  inputContactName,
  inputContactNumber
}
class AddNewContact extends PureComponent {
  handleInputContactName = () => {
    this.props.inputContactName()
  }
  handleInputContactNumber = () => {
    this.props.inputContactNumber()
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
            className={formStyles.input} 
            placeholder='Name:'
            required
            onInput={this.handleInputContactName}
          />
          <input 
            className={formStyles.input} 
            placeholder='Number:'
            required
            onInput={this.handleInputContactNumber}
          />
          <button className={buttonStyles.form_button}>Add Contact</button>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewContact);