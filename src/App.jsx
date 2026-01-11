import "./App.css";
import Header from "./pages/Header.jsx";
import Home from "./pages/index.jsx";
import UseState from "./pages/useState.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;