import './styles/App.css';
import './styles/Navbar.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Spotify from "./pages/Spotify";
import LessonBook from "./pages/LessonBook"

function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <Routes>
{      /*<Route path='/' element={<Home />}></Route>
*/}
      <Route path='/Spotify' element={<Spotify />}/>
      <Route path='/LessonBook' element={<LessonBook/>}/>
    </Routes>

      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
