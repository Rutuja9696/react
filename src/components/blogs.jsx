import { useEffect } from "react";
import { connect } from "react-redux";
import store from "../redux/store/store";
import { blogActionTypes } from "../redux/constants/blogActionTypes";
import blogActionObjectGenerator from "../redux/action/blogActionGenerator";
function Blogs(props) {
  // const getBlog = () => {
  // store.dispatch(blogActionObjectGenerator(blogActionTypes.GET));
  // };
  //use of hook
  useEffect(() => {
    store.dispatch(blogActionObjectGenerator(blogActionTypes.GET));
  });
  //markup
  return (
    <div>
      <h1>BLOGS</h1>
      {props.blogProps.map((blog) => {
        return <p key={blog.id}>{blog.title}</p>;
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    blogProps: state.blogReducer.blogs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBlog: (payload = {}) => {
      return dispatch(blogActionObjectGenerator(blogActionTypes.GET, payload));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
