import classes from "./App.module.css";
import NavbarSmall from "./components/Navbar/NavbarSmall";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <nav>
          <NavbarSmall />
        </nav>
        <Header />
      </header>
      <section>
        <AboutSection />
      </section>
      <section id='details'>
        <Services />
      </section>
      <section id='portfolio'>
        <Projects />
      </section>
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
