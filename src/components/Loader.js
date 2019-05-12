import React, { PureComponent } from "react";
import styles from "../css/components/Loader.module.css";

class Loader extends PureComponent {
  render() {
    switch(this.props.type){
      case 'large':
      return (
        <div className={styles.loader_large}>
          <div className={styles.bouncing_dot} />
          <div className={styles.bouncing_dot} />
          <div className={styles.bouncing_dot} />
        </div>
      );
      case 'medium':
      return (
        <div className={styles.loader_medium}>
          <div className={styles.bouncing_dot} />
          <div className={styles.bouncing_dot} />
          <div className={styles.bouncing_dot} />
        </div>
      );
      case 'small':
      return (
        <div className={styles.loader_small}>
          <div className={styles.bouncing_dot} />
          <div className={styles.bouncing_dot} />
          <div className={styles.bouncing_dot} />
        </div>
      );
      default:
        return (
          <div className={styles.loader_medium}>
            <div className={styles.bouncing_dot} />
            <div className={styles.bouncing_dot} />
            <div className={styles.bouncing_dot} />
          </div>
        );
    }
    
  }
}
Loader.defaultProps = {
  type: "medium"
};
export default Loader;
