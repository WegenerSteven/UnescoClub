import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App =() => {
  return (
    <Router>
      <Header />
      <Home />
      <About />
      <Events />
      <Contact />
      <Footer/>
    </Router>
  );
}

export default App;