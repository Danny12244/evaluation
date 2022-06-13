// Cart Actions here

import axios from "axios"
import { GET_CART_ITEMS_ERROR, GET_CART_ITEMS_LOADING, GET_CART_ITEMS_SUCCESS } from "./cart.types"

export const CartApi = ()=>(dispatch)=>{
    dispatch({type:GET_CART_ITEMS_LOADING})
    axios.get("http://localhost:8080/cartItems")
    .then((r)=>{dispatch({type:GET_CART_ITEMS_SUCCESS,payload:r.data})})
    .catch((err)=>{dispatch({type:GET_CART_ITEMS_ERROR})})
}