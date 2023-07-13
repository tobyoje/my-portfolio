import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (

    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="porfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
