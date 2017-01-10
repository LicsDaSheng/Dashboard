
export default {
  namespace: 'topMenu',
  state: {
      currentSelect:'home'
  },
  reducers: {
      save(state,{ payload: { currentSelect} }){
          return {...state,currentSelect};
      }
  },
  effects: {
      /**
       * 选择menu
       * @param selectKey
       * @param put
       */
      *selectMenu({payload:selectKey},{put}){
          yield put({
              type:'save',
              payload:{
                  currentSelect:selectKey
              }
          });
      }
  },
  subscriptions: {}
};
