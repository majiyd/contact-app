import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import Notification from '../components/Notification'
import styles from '../css/containers/NotificationDock.module.css'

function mapStateToProps(state){
  return{
    notifications: state.ui.notifications
  }
}
class NotificationDock extends PureComponent {
  
  render() {
    return (
      <div className={styles.notification_dock}>
        {this.props.notifications.map(
          (notification)=>(
            <Notification 
              key={notification.id}
              id={notification.id}
              type={notification.type} 
              message={notification.message}
            />
          ))
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(NotificationDock);