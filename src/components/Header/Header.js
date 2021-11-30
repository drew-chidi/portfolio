import React from "react";
import classes from "./Header.module.css";

const Hero = () => {
  return (
    <div>
      <header id='header' className={classes.header}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div>
              <div className={classes.text_container}>
                <h1 className={classes.h1_large}>
                  Hi, I'm Andrew. <br />
                  I'm a Frontend Dev.{" "}
                </h1>
                <a className={classes.btn_solid_lg} href='#about'>
                  Download CV
                </a>
                <a className={classes.btn_outline_lg} href='#contact'>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
