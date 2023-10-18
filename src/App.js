import React, { lazy, Suspense } from 'react';

import './styles/App.css';
import './styles/Navbar.css';

const Navbar = lazy(() => import('./components/Navbar')); 
const Home = lazy(() => import('./components/Home')); 
const About = lazy(() => import('./components/About')); 
const Projects = lazy(() => import('./components/Projects')); 
const Contact = lazy(() => import('./components/Contact')); 
const Footer = lazy(() => import('./components/Footer')); 


function App() {

  return (
    <>
    <header>
      <Suspense fallback = {null}>
        <Navbar />
      </Suspense>
    </header>

      <Suspense fallback = {null}>
        <Home />
      </Suspense>
      <Suspense fallback = {null}>
        <About />
      </Suspense>
      <Suspense fallback = {null}>
        <Projects />
      </Suspense>
      <Suspense fallback = {null}>
        <Contact />
      </Suspense>
      <Suspense fallback = {null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
