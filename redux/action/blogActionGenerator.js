import axios from "axios";
import { blogActionTypes } from "../constants/blogActionTypes";
const url = "https://blog-rendering1.herokuapp.com/blogs";
const blogActionObjectGenerator = (actionType, payload = {}) => {
  switch (actionType) {
    case blogActionTypes.GET:
      return async (dispatch) => {
        let { data } = await axios.get(url);
        dispatch({
          type: blogActionTypes.GET,
          payload: {
            blogs: [...data],
          },
        });
      };
    default: {
      return {
        type: "Invalid Action",
      };
    }
  }
};
export default blogActionObjectGenerator;
