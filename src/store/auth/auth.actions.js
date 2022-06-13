// Auth Actions here
import axios from 'axios'
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from './auth.types'

export const LoginApi = (data) => (dispatch) =>{
    dispatch({type:AUTH_SIGN_IN_LOADING})
   axios.post("https://reqres.in/api/login",data)
   .then((r)=>(dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:r.data})))
   .catch((e)=>dispatch({type:AUTH_SIGN_IN_ERROR}))
}


export const LogoutApi = () => (dispatch) =>{
dispatch({type:AUTH_SIGN_OUT})
}