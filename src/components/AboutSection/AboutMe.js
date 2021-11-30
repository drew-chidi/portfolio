import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div id='about' className={`${classes.s_about} ${classes.target_section}`}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.column}>
            <h2>About Me</h2>

            <div className={classes.text_container}>
              <p>
                I love to create beautiful and efficient websites. With 8months
                experience, I have a passion for responsive website design and a
                proponent of mobile first approach. I currently aim to learn as
                much as I can in a work environment and further my own abilities
                in a professional setting.
              </p>
            </div>
          </div>

          <div className={classes.column}>
            <div>
              <div className={classes.time}>September, 2021 - PRESENT</div>
              <h6>Frontend Developer</h6>
              <p>Frontend Web developer for Segalerty</p>
              <div className={classes.time}>June, 2021 - PRESENT</div>
              <h6>Web Developer</h6>
              <p>Freelancing and working on my personal projects</p>
            </div>
          </div>
          <div className={classes.column}>
            <div>
              <div className={classes.time}>December, 2020 - March, 2021</div>
              <h6>Intern</h6>
              <p>Frontend intern for Styleest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
