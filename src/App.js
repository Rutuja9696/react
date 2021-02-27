import "./App.css";
import Blogs from "./components/blogs";
import store from "./redux/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Blogs />
      </div>
    </Provider>
  );
}

export default App;
