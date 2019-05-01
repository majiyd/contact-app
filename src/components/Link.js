import React, { PureComponent } from 'react';
import linkStyles from '../css/components/Link.module.css'

class Link extends PureComponent {
  //The link component determines the style based on the isActive Props
  render() {
    return (
      <div className={this.props.isActive ? linkStyles.active_link : linkStyles.link}>
        {this.props.children}
      </div>
    );
  }
}

export default Link;