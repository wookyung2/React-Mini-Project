// Action types
const LOAD_HOT = "axios/LOAD_HOT"
const LOAD_HOT_SUCCESS = "axios/LOAD_HOT_SUCCESS"

// Action Creater & Action
export const loadHot = () => {
    return {
      type: LOAD_HOT,
      payload: {
        request: {
          url: 'hot.json',
        },
      },
   };
}

// 모듈의 초기 상태
const state = {}

// Reducer
const axios = (state, action) => {
    console.log('userReducer함수실행!', state, action)
    switch (action.type) {
      case LOAD_HOT:
        return {
          loading: true
        };
        break;
  
      case LOAD_HOT_SUCCESS:
        return {
          loading: false,
          data: action.payload.data
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default axios;
  