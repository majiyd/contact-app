import React, { PureComponent } from 'react';
import linkStyles from '../css/components/Link.module.css'

class Link extends PureComponent {
  
  render() {
    return (
      <div className={linkStyles.link}>
        {this.props.children}
      </div>
    );
  }
}

export default Link;