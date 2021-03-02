import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { blogActionTypes } from "../constants/blogActionTypes";
const url = "https://blog-rendering1.herokuapp.com/blogs";

const fetchBlogs = async () => {
  const response = await axios.get(url);
  return response.data;
};
export function* fetchBlogsSaga(payload) {
  try {
    const response = yield call(fetchBlogs);
    if (response) {
      yield put({ type: blogActionTypes.GET, payload: { blogs: response } });
    }
  } catch (err) {
    console.log(err.message);
  }
}
