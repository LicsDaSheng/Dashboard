import React from 'react';
import styles from './Users.css';
import {
  Table,
  Pagination,
  Popconfirm,
  Button
} from 'antd';
import {
  routerRedux
} from 'dva/router';
import {
  connect
} from 'dva';
import UserModal from './UserModal';
import {
  PAGE_SIZE
} from '../../constants';

const Users = ({
  dispatch,
  list: dataSource,
  total,
  page: current,
  loading
}) => {

  /**
   * 删除用户触发
   */
  function deleteHandler(id) {
    dispatch({
      type: 'users/remove',
      payload: id
    });
  }

  /**
   * 编辑用户触发
   */
  function editHandler(id, values) {
    console.info(id + "value" + values);
    console.info(values);
    dispatch({
      type: 'users/patch',
      payload: {
        id,
        values
      }
    })
  }

  /**
   * 分页触发
   */
  function pageChangeHandler(page) {
    page = page - 1;
    dispatch(routerRedux.push({
      pathname: '/users',
      query: {
        page
      },
    }));
  }

  /**
   * 新增用户触发
   */
  function createHandler(values) {
    dispatch({
      type: 'users/create',
      payload: values,
    });
  }

  const columns = [{
    title: '账号',
    dataIndex: 'username',
    key: 'username',
    render: text => <a href="">{text}</a>
  }, {
    title: '姓名',
    dataIndex: 'nickName',
    key: 'nickName',
  }, {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: 'QQ',
    dataIndex: 'qq',
    key: 'qq'
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <span className={styles.operation}>
            <UserModal record={ record } modelType="edit" onOk = {editHandler.bind(null,record.id)}>
              <a>编辑</a>
            </UserModal>
            <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
              <a href="">删除</a>
            </Popconfirm>
          </span>
    ),
  }];

  return (
    <div className={styles.normal}>
          <div>
            <div className={styles.create}>
              <UserModal record={{}} modelType="add" onOk={createHandler}>
                <Button type="primary">添加用户</Button>
              </UserModal>
            </div>
            <Table 
            columns={columns}
            dataSource={dataSource}
            loading={loading}
            rowKey = {record => record.id}
            pagination = {false}
            bordered
            />
            <Pagination 
            className = 'antd-table-pagination'
            total={total}
            current={current+1}
            pageSize ={PAGE_SIZE}
            onChange = { pageChangeHandler}
            />
          </div>
        </div>
  );
}

function mapStateToProps(state) {
  const {
    list,
    total,
    page
  } = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page
  }
}

export default connect(mapStateToProps)(Users);