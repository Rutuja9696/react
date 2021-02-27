// import "./App.css";
import Blogs from "./components/blogs";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { useState } from "react";
import ThemeContext, { themes } from "./theme-context";

function App() {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <Blogs toggleTheme={toggleTheme} />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
