import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import  Link  from '../components/Link';
import {applyClickedOnAddContactLink} from '../redux/actions/actionCreators/uiActionCreators'

function mapStateToProps(state){
  return{
    isContactPageLinkActive: state.ui.links.isContactPageLinkActive
  }
}
const mapDispatchToProps = {
  applyClickedOnAddContactLink,
}
class Navbar extends PureComponent {
  handleClickOnAddContactLink = ()=>{
    this.props.applyClickedOnAddContactLink()
  }
  render() {
    return (
      <div>
        <Link isActive={this.props.isContactPageLinkActive}>
          <span onClick={this.handleClickOnAddContactLink}>Contacts</span>
        </Link>
        <Link isActive={!this.props.isContactPageLinkActive}>
          <span onClick={this.handleClickOnAddContactLink}>Add New Contact</span>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);