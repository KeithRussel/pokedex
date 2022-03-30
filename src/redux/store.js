import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import pokemonReducer from "./reducers";

const rootReducer = combineReducers({ pokemonReducer });

const middleware = [thunk];

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
