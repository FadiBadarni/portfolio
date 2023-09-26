import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import Colors from "./utilities/Colors";

const theme = createTheme({
  typography: {
    fontFamily: "'Source Sans 3', sans-serif",
  },
  palette: {
    background: {
      default: `${Colors.raisinBlack}`,
    },
    text: {
      primary: `${Colors.cultered}`,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
