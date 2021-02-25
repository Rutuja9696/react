import { useEffect } from "react";
import { connect } from "react-redux";
import store from "../redux/store/store";
import { blogActionTypes } from "../redux/constants/blogActionTypes";
import blogActionObjectGenerator from "../redux/action/blogActionGenerator";
import Styles from "../styles/blog.module.css";

function Blogs(props) {
  //using of hook
  useEffect(() => {
    store.dispatch(blogActionObjectGenerator(blogActionTypes.GET));
  }, []);
  //markup
  return (
    <div>
      <h1>BLOGS</h1>
      <div className={Styles.container}>
        {props.blogProps.map((blog, i) => {
          return (
            <div key={i} className={Styles.card}>
              <img src={blog.imageUrl} className={Styles.image} />
              <p key={blog.id} className={Styles.title}>
                {blog.title}
              </p>
              <h6 className={Styles.author}>- {blog.author}</h6>
            </div>
          );
        })}
      </div>
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
