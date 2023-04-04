import React, { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import { SelectedPage } from './shared';

// export const SelectedPage = {
//   Home: 'home',
//   About: 'about',
//   Services: 'services',
//   Blog: 'blog',
//   Contact: 'contact',
// };

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const theme = useSelector((state) => state.theme.mode);

  console.log('1', selectedPage);

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
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Portfolio setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
