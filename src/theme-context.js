import React from "react";
export const themes = {
  dark: {
    color: "white",
    background: "black",
    padding: "5px",
    textAlign: "center",
  },
  light: {
    color: "black",
    background: "white",
    padding: "5px",
    textAlign: "center",
  },
};
const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
