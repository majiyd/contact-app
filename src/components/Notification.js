import React, { PureComponent } from 'react';
import styles from '../css/components/Notification.module.css'

class Notification extends PureComponent {
  render() {
    switch(this.props.type){
      case 'success':{
        return (
          <div className={styles.success}>
            <div className={styles.close}>x</div>
            {this.props.message}
          </div>
          );
      }
      case 'error':{
        return(
          <div className={styles.error}>
            <div className={styles.close}>x</div>
            {this.props.message}
          </div>
        )
      }
      default:
        return(
          null
        )
    }
    
  }
}

Notification.defaultProps = {
  type: 'success',
  message: 'Success!'
}

export default Notification;