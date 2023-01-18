import { createStore, applyMiddleware, combineReducers } from "redux";
import NavbarReducer from "./Navbar/NavbarReducer";
import mountNavbarReducer from "./ProductNavbar/ProductNavReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  navbar: NavbarReducer,
  mountNav: mountNavbarReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(composeWithDevTools),
);
