import React from "react";
import classes from "./Services.module.css";
import { SiNextdotjs, SiGithub, SiReact, SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";

const Services = () => {
  return (
    <div id='services'>
      <div className={classes.services}>
        <div className={classes.head_container}>
          <h2 className={classes.h2_heading}>Offered Services</h2>
          <p className={classes.p_heading}>
            I am a great communicator and love to invest the necessary time to
            carry out research and understand the customer's problem very well.
            Frontend web development have been my bread and butter for,
            approximately, a year. During that time I've discovered that I can
            help startups and companies with the following services.
          </p>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            {/* <!-- Text Container --> */}
            <div className={classes.text_box}>
              <h4> BASIC SEO </h4>
              <p>
                My favorite design tools are Photoshop and Illustrator but I can
                create designs in Figma, Sketch and Adobe XD too
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.text_box}>
              <h4>DEVELOPMENT</h4>
              <p>
                I have a keen eye for details and can code the customer's
                design. My focus is to generate clean, pixel perfect code that's
                well structured for reliability
              </p>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.text_box}>
              <h4>DEVELOPMENT TECHNOLOGIES</h4>
              <p>
                I am familiar and work on a daily basis with HTML, CSS,
                Material-UI, TailwindCSS, JavaScript, React JavaScript Library,
                Next-JS, and other modern frameworks.
              </p>
              <div className={classes.icons_container}>
                <SiJavascript className={`${classes.icon} ${classes.js}`} />
                <SiReact className={`${classes.icon} ${classes.react}`} />
                <SiNextdotjs className={`${classes.icon} ${classes.next}`} />
                <SiGithub className={classes.github} />
                <TiHtml5 className={classes.html} />
                <IoLogoCss3 className={`${classes.icon} ${classes.css}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
