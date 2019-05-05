import React, { PureComponent } from 'react';
import Notification from '../components/Notification'
import styles from '../css/containers/NotificationDock.module.css'

class NotificationDock extends PureComponent {
  
  render() {
    return (
      <div className={styles.notification_dock}>
        <Notification />
        <Notification type='error' message='data transfer failed'/>
        <Notification type='success' message='user added successfully'/>
        <Notification type='error'/>
      </div>
    );
  }
}

export default NotificationDock;