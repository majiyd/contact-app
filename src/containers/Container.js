import React, { PureComponent } from 'react';
import containerStyles from '../css/containers/Container.module.css'

class Container extends PureComponent {
  render() { 
    return ( 
      <div className={containerStyles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;