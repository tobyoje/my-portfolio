import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectManagement from "./works/ProjectManagement/ProjectManagement";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calculator from "./works/Calculator/Calculator";

function App() {
  return (
    <div className="app">
      <BrowserRouter >
        <Header />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="porfolio" element={<Portfolio />} />
          <Route path="work/calculator" element={<Calculator />} />
          <Route
            path="work/project-management"
            element={<ProjectManagement />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
