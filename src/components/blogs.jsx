import { connect } from "react-redux";
import store from "../redux/store/store";
import { blogActionTypes } from "../redux/constants/blogActionTypes";
import blogActionObjectGenerator from "../redux/action/blogActionGenerator";
function Blogs() {
  const getBlog = async () => {
    store.dispatch(blogActionObjectGenerator(blogActionTypes.GET));
  };
  return (
    <div>
      <h1>BLOGS</h1>
      <p></p>
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
      return dispatch(blogActionObjectGenerator(blogActionTypes.Get, payload));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
