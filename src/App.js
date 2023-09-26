import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import Colors from "./utilities/Colors";
import "./App.css";

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
      <div
        className="App"
        style={{
          backgroundColor: `${Colors.raisinBlack}`,
          background: `
        radial-gradient(circle at 20% 40%, rgba(237, 231, 246, 0.05) 0%,
         ${Colors.raisinBlack} 70%),
        radial-gradient(circle at 80% 50%, rgba(168, 171, 174, 0.2) 0%,
         ${Colors.raisinBlack} 70%)
      `,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
