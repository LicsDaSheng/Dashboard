import * as loginService from '../services/login';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'login',
  state: {
    user:{},
    isLogin:false,
    errorMessage:null
  },
  reducers: {
    save(state,{ payload: { user, isLogin,errorMessage} }){
      return {...state,user,isLogin,errorMessage};
    }
  },
  effects: {

    /**
     * 登录
     */
     *login({payload:user},{call,put}){

      const {data} = yield call(loginService.login,user);

     
      if(data === undefined){

        yield put({
          type:'save',
          payload:{
            user:{...data},
            isLogin:false,
            errorMessage:'用户名或者密码错误'
          }
        });

      }else{

        yield put({
          type:'save',
          payload:{
            user:{...data},
            isLogin:true
          }
        });
        yield put(routerRedux.push('/users'));
      }
    },
    *logout({},{put}){
      yield put({
        type:'save',
        payload:{
          user:{},
          isLogin:false
        }
      });
    },
    *checkLogin({},{put,select}){
      const isLogin = yield select(state => state.login.isLogin);
      if(!isLogin){
        yield put(routerRedux.push('/login'));
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname !== '/login') {
          dispatch({
            type: 'checkLogin'
          });
        }
        if(pathname==='/logout'){
          dispatch({
            type:'logout'
          })
        }
      });
    }
  }
};
