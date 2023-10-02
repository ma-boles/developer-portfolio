import './styles/App.css';
import './styles/Navbar.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>

      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
