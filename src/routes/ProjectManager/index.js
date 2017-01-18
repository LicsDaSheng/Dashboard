import React from 'react';
import { connect } from 'dva';
import MainLayout from '../../components/MainLayout/MainLayout';

import {Row,Col} from 'antd';
import styles from './ProjectManager.css';

import PlanItemTree from '../../components/PlanItemTree';

const ProjectManager= (location) => {
  return (
      <MainLayout location={location}>
          <div className={styles.normal}>
              <Row>
                  <Col span={18} push={6}><div className={styles.divPage}></div></Col>
                  <Col span={6} pull={18}><div className={styles.divPage}><PlanItemTree/></div></Col>
              </Row>
          </div>
      </MainLayout>
  );
};



export default connect()(ProjectManager);
