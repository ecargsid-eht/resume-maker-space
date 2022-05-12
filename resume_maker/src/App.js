import { Routes, Route } from "react-router-dom";
import "./App.css";
import InTemplateForm from "./components/forms/InTemplateForm";
import Home from "./components/Home";
import MainDiv from "./components/MainDiv";
import Navbar from "./components/Navbar";
import RequestForm from "./components/RequestForm";
import Template from "./components/Template";
import InTemplate from "./components/templates/InTemplate";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-template" element={<Template/>} />
        <Route path="/choose-template/in-template" element={<MainDiv />} />
        <Route path="/request-template-form" element={<RequestForm/>} />
      </Routes>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
