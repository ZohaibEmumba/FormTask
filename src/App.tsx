import React from "react";
import TopNav from "./Components/TopNav/TopNav";
import FormComponent from "./Components/Form/FormComponent";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Switch } from "@mui/material";

import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "./Components/ThemeProvider/Theme";

const App = () => {
  const [theme, setTheme] = React.useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <TopNav />
      <div className="switch">
        <Switch onClick={themeToggler} />
      </div>
      <FormComponent />
    </ThemeProvider>
  );
};

export default App;
