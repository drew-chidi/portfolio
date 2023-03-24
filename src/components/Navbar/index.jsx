import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { FaLinkedin, FaMoon } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import classes from "./Navbar.module.css";
import { BsSun } from "react-icons/bs";
import { toggleTheme } from "../../redux/slices/themeSlice";
import Link from "./Link";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [background, setBackground] = useState(false);
  const [open, setOpen] = useState(false);

  console.log(open);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const toggleHandler = () => {
    setOpen((value) => !value);
  };

  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  console.log(theme);

  const navBackgroundHandler = () => {
    if (window.scrollY >= 80) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  window.addEventListener("scroll", navBackgroundHandler);

  return (
    <div
      className={`${classes.header} ${
        background && classes.active_scroll
      } ${theme}`}
    >
      <div className={classes.container}>
        <div>
          <p>{`<>...</>`}</p>
        </div>

        <div className={classes.navLinks_theme_container}>
          {/* LIGHT & DARK THEMES TOGGLER */}
          <button
            class={classes.theme_toggler}
            type='button'
            onClick={handleTheme}
          >
            {theme === "dark" ? (
              <BsSun className={classes.navbar_toggler_icon} size={24} />
            ) : (
              <FaMoon className={classes.navbar_toggler_icon} size={24} />
            )}
          </button>

          {/* HAMBURGER MENU */}
          <button
            class={classes.navbar_toggler}
            type='button'
            onClick={toggleHandler}
          >
            {!open ? (
              <FiMenu className={classes.navbar_toggler_icon} size={24} />
            ) : (
              <AiOutlineClose
                className={classes.navbar_toggler_icon}
                size={24}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Screen Nav */}
      {open && (
        <nav className={`${classes.navWrapper_mobile} ${theme}`}>
          <ul className={classes.navbar_menu}>
            <li className={classes.nav_item}>
              <Link
                class={classes.nav_link}
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li className={classes.nav_item}>
              <Link
                class={classes.nav_link}
                page='About'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li className={classes.nav_item}>
              <Link
                class={classes.nav_link}
                page=' Services'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li className={classes.nav_item}>
              <a class={classes.nav_link} href='#'>
                Blog
              </a>
            </li>
            <li className={classes.nav_item}>
              <Link className={classes.nav_link} page='Contact' />
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop Screen Nav */}
      <nav className={`${classes.navWrapper_desktop} ${theme}`}>
        <ul className={classes.navbar_menu_desktop}>
          <li className={classes.nav_item}>
            <Link
              class={classes.nav_link}
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
          <li className={classes.nav_item}>
            <Link
              class={classes.nav_link}
              page='About'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
          <li className={classes.nav_item}>
            <Link
              class={classes.nav_link}
              page=' Services'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </li>
          <li className={classes.nav_item}>
            <a class={classes.nav_link} href='#'>
              Blog
            </a>
          </li>
          <li className={classes.nav_item}>
            <Link className={classes.nav_link} page='Contact' />
          </li>
        </ul>
      </nav>
    </div>
    // <nav className={`${classes.navbar} ${background && classes.active}`}>
    //   <div className={classes.container}>
    //     {/* Text Logo */}
    //     <div>
    //       <a href='/'>{`<>DREW</>`}</a>
    //     </div>

    //     <button class={classes.navbar_toggler} type='button'>
    //       <FiMenu
    //         className={classes.navbar_toggler_icon}
    //         onClick={toggleHandler}
    //       />
    //     </button>

    //     <div
    //       className={`${classes.offcanvas_collapse} ${
    //         !open && classes.navbar_collapse
    //       }`}
    //       id='navbarsExampleDefault'
    //     >
    //   <ul className={classes.navbar_nav}>
    //     <li className={classes.nav_item}>
    //       <a class={classes.nav_link} href='#header'>
    //         Home
    //       </a>
    //     </li>
    //     <li className={classes.nav_item}>
    //       <a class={classes.nav_link} href='#about'>
    //         About
    //       </a>
    //     </li>
    //     <li className={classes.nav_item}>
    //       <a class={classes.nav_link} href='#services'>
    //         Services
    //       </a>
    //     </li>

    //     <li className={classes.nav_item}>
    //       <a className={classes.nav_link} href='#contact'>
    //         Contact
    //       </a>
    //     </li>
    //   </ul>
    //       <span className={`${classes.nav_item} ${classes.social_icons}`}>
    //         <button className={classes.s_stack}>
    //           <a href='https://www.linkedin.com/in/andrew-ofuenweuche-797a31aa/'>
    //             <FaLinkedin className={classes.fa_linkedin} />
    //           </a>
    //         </button>
    //         <button className={classes.s_stack}>
    //           <a href='https://github.com/drew-chidi/'>
    //             <FaGithub className={classes.fa_github} />
    //           </a>
    //         </button>
    //       </span>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
