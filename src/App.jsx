import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import MemberPortal from "./pages/MemberPortal";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/member-portal" element={<MemberPortal />} />
      </Routes>
      <About />
      <Events />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
