import axios from "axios";
import { blogActionTypes } from "../constants/blogActionTypes";
const url = "https://blog-rendering1.herokuapp.com/blogs";

const fetchBlogs = (store) => (next) => async (action) => {
  if (action.type === blogActionTypes.GET) {
    let { data } = await axios.get(url);

    action.payload = {
      blogs: [...data.data],
    };
  }
  return next(action);
};
export default fetchBlogs;
