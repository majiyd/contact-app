import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import  Link  from '../components/Link';

function mapStateToProps(state){
  return{
    isContactPageLinkActive: state.ui.links.isContactPageLinkActive
  }
}
class Navbar extends PureComponent {
  
  render() {
    
    return (
      <div>
        <Link isActive={this.props.isContactPageLinkActive}>
          Contacts
        </Link>
        <Link isActive={!this.props.isContactPageLinkActive}>
          Add New Contact
        </Link >
      </div>
    );
  }
}

export default connect(mapStateToProps)(Navbar);