import React, { useState } from "react";
import classes from "./NavbarSmall.module.css";
import { FiMenu } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavbarMobile = () => {
  const [background, setBackground] = useState(false);

  const navBackgroundHandler = () => {
    if (window.scrollY >= 80) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  window.addEventListener("scroll", navBackgroundHandler);
  return (
    <nav className={`${classes.navbar} ${background && classes.active}`}>
      <div className={classes.container}>
        {/* Text Logo */}
        <a href='index.html'>DREW</a>

        <button
          class={classes.navbar_toggler}
          type='button'
          data-toggle='offcanvas'
        >
          <FiMenu className={classes.navbar_toggler_icon} />
        </button>

        <div
          className={`${classes.offcanvas_collapse} ${classes.navbar_collapse}`}
          id='navbarsExampleDefault'
        >
          <ul className={classes.navbar_nav}>
            <li className={classes.nav_item}>
              <a class={classes.nav_link} href='#header'>
                Home
              </a>
            </li>
            <li className={classes.nav_item}>
              <a class={classes.nav_link} href='#about'>
                About
              </a>
            </li>
            <li className={classes.nav_item}>
              <a class={classes.nav_link} href='#services'>
                Services
              </a>
            </li>

            <li className={classes.nav_item}>
              <a className={classes.nav_link} href='#contact'>
                Contact
              </a>
            </li>
          </ul>
          <span className={`${classes.nav_item} ${classes.social_icons}`}>
            <button className={classes.s_stack}>
              <a href='#your-link'>
                <FaLinkedin className={classes.fa_linkedin} />
              </a>
            </button>
            <button className={classes.s_stack}>
              <a href='#your-link'>
                <FaGithub className={classes.fa_github} />
              </a>
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
