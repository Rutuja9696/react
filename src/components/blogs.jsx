import { useEffect, useContext } from "react";
import { connect } from "react-redux";
import store from "../redux/store/store";
import { blogActionTypes } from "../redux/constants/blogActionTypes";
import blogActionObjectGenerator from "../redux/action/blogActionGenerator";
import Styles from "../styles/blog.module.css";
import ThemeContext from "../theme-context";
import Loader from "react-loader-spinner";

function Blogs(props) {
  //using of hook
  useEffect(() => {
    store.dispatch(blogActionObjectGenerator(blogActionTypes.GET));
  }, []);
  //holds current value of theme
  const themes = useContext(ThemeContext);
  //markup
  return (
    <div style={themes}>
      <button onClick={props.toggleTheme}>Change theme</button>
      <h1>BLOGS</h1>
      {props.blogProps.status !== "Successful" ? (
        <Loader type="Puff" color="#00BFFF" height={520} width={80} />
      ) : (
        <div className={Styles.container}>
          {props.blogProps.data.map((blog, i) => {
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
      )}
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
