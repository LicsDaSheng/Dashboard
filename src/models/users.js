import * as usersService from '../services/users';
export default {
  namespace: 'users',
  state: {
    list:[],
    total:null,
    page:null
  },
  reducers: {
    save(state,{ payload: { data: list, total, page} }){
      return {...state,list,total, page};
    }
  },
  effects: {
    /**
     * 查询用户，分页
     */
    *fetch({payload:{page = 0}},{call,put}){
      const {data} = yield call(usersService.fetch,{page});
      yield put({
        type:'save',
        payload:{
          data:data.content,
          total:data.totalElements,
          page : data.number
        }
      });
    },
    /**
     * 删除用户
     */
    *remove({payload: id}, { call, put}){
      yield call( usersService.remove,id);
      yield put ({ type: 'reload'});
    },
    /**
     * 编辑用户
     */
    *patch({payload: { id, values }},{call, put}){
      yield call(usersService.patch, id, values);
      yield put({type: 'reload'});
    },
    /**
     * 新增用户
     */
    *create({ payload: values},{call, put}){
      yield call(usersService.create, values);

      yield put({ type: 'reload'});
    },
    /**
     * 重新加载
     */
    *reload(action, {put, select}){
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page }});
    }
  },
  subscriptions: {
    setup({dispatch,history}){
      return history.listen(({pathname,query})=>{
        if(pathname === '/users'){
          dispatch({type:'fetch',payload:query});
        }
      });
    }
  },
};
