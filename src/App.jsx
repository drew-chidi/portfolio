import React, { useEffect, useState } from 'react';
import About from './components/About';
import Projects from './components/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

const SelectedPage = {
  Home: 'home',
  About: 'about',
  Services: 'services',
  Blog: 'blog',
  Contact: 'contact',
};

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={theme}>
      <header>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </header>
      <Home />
      <About />
      <Portfolio />

      {/* <section id='portfolio'>
        <Projects />
      </section> */}
      <section id='contact'>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
