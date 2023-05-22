import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";
import { Router, Route,Routes } from "react-router-dom";
import Stepper from "./pages/onBoardingForm/Stepper";
import Success from "./pages/onBoardingForm/onBoardingFormComponents/Success";

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Stepper />} />
        <Route path="/success" element={<Success />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
