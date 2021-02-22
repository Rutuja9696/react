import "./App.css";
import Blogs from "./components/blogs";
import store from "./redux/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Blogs />
        </header>
      </div>
    </Provider>
  );
}

export default App;
