import { SET_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from '../redux/constant'
import axios from 'axios'
import { toast } from 'react-toastify'

export const signUpAction = (user, navigate) => async (dispatch) => {
    dispatch({ type: SET_REQUEST })
    try {
        const response = await axios.post("/signup", user)
        localStorage.setItem('type', response.data.userType)
        dispatch({type:SIGNUP_SUCCESS, payload:response.data})
        if(localStorage.getItem('type') === 'NGO'){
            navigate('/admin-home')
        }else{
            navigate('/home')
        }
        toast.success(response.data.message)
    }
    catch (error) {
        toast.error(error.message)
    }
}


export const signInAction = (user, navigate) => async (dispatch) => {
    dispatch({ type: SET_REQUEST })
    try {
        const response = await axios.post("/signin", user)
        localStorage.setItem('type', response.data.userType)
        dispatch({type:LOGIN_SUCCESS, payload:response.data})
        if(localStorage.getItem('type') === 'NGO'){
            navigate('/admin-home')
        }else{
            navigate('/home')
        }
        toast.success(response.data.message)
    }
    catch (error) {
        toast.error(error.message)
    }
}