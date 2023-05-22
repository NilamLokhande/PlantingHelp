import { LOGIN_SUCCESS, _SUCCESS, SET_REQUEST, SIGNUP_SUCCESS } from "./constant"

const initialstate={
    currentUser: {},
    loggedInUser : {},
    loading:false
}
export const signinReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_REQUEST:
            return {...state, loading:true}
            case SIGNUP_SUCCESS:
                return {...state,currentUser: action.payload, loading:false}
            case LOGIN_SUCCESS:
                return {...state,loggedInUser: action.payload, loading:false}
        default:
            return state
    }
}