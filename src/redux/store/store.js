import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/root.reducer";
import thunk from "redux-thunk";
import { fetchBlogsSaga } from "../saga/fetchBlogs.saga";
import createSagaMiddleware from "redux-saga";
const url = "https://blog-rendering1.herokuapp.com/blog";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(fetchBlogsSaga);
export default store;
