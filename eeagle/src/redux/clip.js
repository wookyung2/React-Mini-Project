// Action types
const CLIPED = "clip/CLIPED";
const UNCLIPED = "clip/UNCLIPED";

// Action Creater & Action
export const userClip = () => ({ type: CLIPED });
export const userUnClip = () => ({ type: UNCLIPED });

// 모듈의 초기 상태
const INITIAL_STATE = {

}

// Reducer
const clip = (state = INITIAL_STATE, action) => {
    console.log('userReducer함수실행!', state, action)

    switch (action.type) {
        case CLIPED: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

export default clip