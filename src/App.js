import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import Portfolio from "./pages/Portfolio/Portfolio";
import ProjectManagement from "./works/ProjectManagement/ProjectManagement";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calculator from "./works/Calculator/Calculator";
import QuickProfile from "./works/QuickProfile/QuickProfile";
import Foodtribe from "./works/Foodtribe/Foodtribe";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="porfolio" element={<Portfolio />} />
          <Route path="work/calculator" element={<Calculator />} />
          <Route
            path="work/project-management"
            element={<ProjectManagement />}
          />
          <Route path="work/quick-profile" element={<QuickProfile />} />
          <Route path="work/foodtribe" element={<Foodtribe />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
