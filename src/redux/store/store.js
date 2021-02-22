import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/root.reducer";
import fetchBlogs from "../middleware/fetchBlog";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(fetchBlogs, thunk));
export default store;
