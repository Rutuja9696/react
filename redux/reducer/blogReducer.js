import { blogActionTypes } from "../constants/blogActionTypes";
const initialState = {
  blogs: [],
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case blogActionTypes.GET:
      return {
        ...state,
        blogs: [...state.blogs, ...action.payload.blogs],
      };
    default:
      return {
        ...state,
      };
  }
};
export default blogReducer;
