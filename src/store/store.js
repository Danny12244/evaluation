// TODO: use this store variable to create a store.
import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";
const rootReducer = combineReducers({ auth: authReducer,prod:productReducer,cart: cartReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
