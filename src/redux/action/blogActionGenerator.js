import axios from "axios";
import { blogActionTypes } from "../constants/blogActionTypes";
const url = "https://blog-rendering1.herokuapp.com/blogs";
const blogActionObjectGenerator = (actionType, payload = {}) => {
  switch (actionType) {
    case blogActionTypes.GET:
      return {
        type: blogActionTypes.GET,
        payload: {
          blogs: [],
        },
      };
    default: {
      return {
        type: "Invalid Action",
      };
    }
  }
};
export default blogActionObjectGenerator;
