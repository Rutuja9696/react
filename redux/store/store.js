import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/root.reducer";
const store = createStore(rootReducer);
export default store;
