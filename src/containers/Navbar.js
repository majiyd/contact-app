import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import  Link  from '../components/Link';
import {clickOnAddContactLink, clickOnContactsPageLink} from '../redux/actions/actionCreators/uiActionCreators'
import navbarStyles from '../css/containers/Navbar.module.css'

function mapStateToProps(state){
  return{
    isContactPageLinkActive: state.ui.links.isContactPageLinkActive
  }
}
const mapDispatchToProps = {
  clickOnAddContactLink, 
  clickOnContactsPageLink,
}
class Navbar extends PureComponent {
  handleClickOnAddContactLink = ()=>{
    this.props.clickOnAddContactLink()
  }
  handleClickOnContactsPageLink = () => {
    this.props.clickOnContactsPageLink()
  }
  render() {
    return (
      <div className={navbarStyles.nav}>
        <Link isActive={this.props.isContactPageLinkActive}>
          <span onClick={this.handleClickOnContactsPageLink}>Contacts</span>
        </Link>
        <Link isActive={!this.props.isContactPageLinkActive}>
          <span onClick={this.handleClickOnAddContactLink}>Add New Contact</span>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);