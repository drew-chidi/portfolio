import { introdata } from "../../data";
import React from "react";
import Typewriter from "typewriter-effect";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <section id='home' className={classes.header}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div>
              <div className={classes.text_container}>
                <h2 className={classes.h1_large}>
                  {introdata.title} <br />
                </h2>
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
                <a
                  target='blank'
                  className={classes.btn_solid_lg}
                  href='https://drive.google.com/file/d/1vSUAQbPekl-P1GYS4WxNYSNrO15bewlR/view?usp=sharing'
                >
                  Download CV
                </a>
                <a className={classes.btn_outline_lg} href='#contact'>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
