import * as loginService from '../services/login';
import {
  routerRedux
} from 'dva/router';

export default {
  namespace: 'login',
  state: {
    user: {},
    isLogin: false,
    errorMessage: null
  },
  reducers: {
    save(state, {
      payload: {
        user,
        isLogin,
        errorMessage
      }
    }) {
      return {...state,
        user,
        isLogin,
        errorMessage
      };
    }
  },
  effects: {

    /**
     * 登录
     */
    * login({
      payload: user
    }, {
      call,
      put
    }) {

      const {
        data
      } = yield call(loginService.login, user);
      let success = data.success;

      if (!success) {

        yield put({
          type: 'save',
          payload: {
            user: data.data,
            isLogin: false,
            errorMessage: data.message
          }
        });

      } else {

        yield put({
          type: 'save',
          payload: {
            user: data.data,
            isLogin: true
          }
        });
        yield put(routerRedux.push('/users'));
      }
    },
    //退出
    * logout({}, {
      put,
      call
    }) {

      const {
        data
      } = yield call(loginService.logout);

      if (data.success) {
        yield put({
          type: 'save',
          payload: {
            user: {},
            isLogin: false
          }
        });
      }


    },
    //登录状态判断
    * checkLogin({}, {
      put,
      select
    }) {
      // console.log('登录状态判断');
      // console.log(yield select(state => state));

      const isLogin = yield select(state => state.login.isLogin);
      if (!isLogin) {
        yield put(routerRedux.push('/login'));
      }
    }
  },
  subscriptions: {
    // setup({
    //   dispatch,
    //   history
    // }) {
    //   history.listen(({
    //     pathname
    //   }) => {
    //     if (pathname !== '/login') {
    //       dispatch({
    //         type: 'checkLogin'
    //       });
    //     }
    //     if (pathname === '/logout') {
    //       dispatch({
    //         type: 'logout'
    //       })
    //     }
    //   });
    // }
  }
};