import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/root.reducer";
// import fetchBlogs from "../middleware/fetchBlog";
import thunk from "redux-thunk";
import { fetchBlogsSaga } from "../saga/fetchBlogs.saga";
import createSagaMiddleware from "redux-saga";
// import watchFetchBlogsSaga from "../saga/fetchBlogs.saga";
const url = "https://blog-rendering1.herokuapp.com/blogs";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  // applyMiddleware(fetchBlogs, thunk)
  applyMiddleware(sagaMiddleware)
);
// sagaMiddleware.run(watchFetchBlogsSaga);
sagaMiddleware.run(fetchBlogsSaga);
export default store;
