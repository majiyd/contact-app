import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {deleteNotification} from '../redux/actions/actionCreators/uiActionCreators'
import styles from '../css/components/Notification.module.css'

function mapStateToProps(state){
  return{}
}
const mapDispatchToProps = {
  deleteNotification,
}
class Notification extends PureComponent {
  componentDidMount(){
    this.interval = setTimeout(() => this.props.deleteNotification(this.props.id), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleCloseNotification = ()=>{
    this.props.deleteNotification(this.props.id)
  }
  render() {
    switch(this.props.type){
      case 'success':{
        return (
          <div className={styles.success}>
            <div 
              className={styles.close}
              onClick={this.handleCloseNotification}
            >x</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Notification);