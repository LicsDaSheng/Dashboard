import React from 'react';
import { connect } from 'dva';
import styles from './ProjectManager.css';

function ProjectManager() {
  return (
    <div className={styles.normal}>
      Route Component: ProjectManager
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ProjectManager);
