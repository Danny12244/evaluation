import { GET_CART_ITEMS_ERROR, GET_CART_ITEMS_LOADING, GET_CART_ITEMS_SUCCESS } from "./cart.types";

// Note: Do not update/change the initial state
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState,{type,payload}) => {
  switch(type){
    case GET_CART_ITEMS_LOADING:{
      return {
        ...state,
        getCartItems:{
          ...state.getCartItems,
          loading:true,
        }
      }
    }
    case GET_CART_ITEMS_SUCCESS:{
      return {
        ...state,
        data:payload
      }
    }
    case GET_CART_ITEMS_ERROR: {
      return {
        ...state,
        getCartItems:{
          ...state.getCartItems,
          loading:false,
          error:true
        }
      }
    }
    default:{
      return state
    }
  }
};
