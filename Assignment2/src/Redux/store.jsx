import { createStore } from "redux";
import { rootReducer } from "../Redux/Reducer/Rootreducer";
import initialState from "../App"
//creating a store
const store = createStore(rootReducer, initialState);

export default store;
