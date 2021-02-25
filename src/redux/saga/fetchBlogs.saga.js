import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { blogActionTypes } from "../constants/blogActionTypes";
// import { takeLatest, put } from "redux-saga/effects";
// import { blogActionTypes } from "../constants/blogActionTypes";
const url = "https://blog-rendering1.herokuapp.com/blogs";
// function* fetchBlogsSaga() {
//   //   console.log("Example saga reached");
//   const blogResponse = yield fetch(url);
//   const blogs = yield blogResponse.json();
// }
// export default function* watchFetchBlogsSaga() {
//   yield takeLatest(blogActionTypes.GET, fetchBlogsSaga);
// }
const fetchBlogs = async () => {
  const response = await axios.get(url);
  return response.data.data;
};
export function* fetchBlogsSaga(payload) {
  try {
    // yield call(startFetchFun());

    const response = yield call(fetchBlogs);
    if (response) {
      yield put({ type: blogActionTypes.GET, payload: { blogs: response } });
    }
    // yield call(processFetchFun(response.data));
    // .then((response) => {
    // })
  } catch (err) {
    // yield call(endFetchFun(error.message));
    console.log(err.message);
  }
}
