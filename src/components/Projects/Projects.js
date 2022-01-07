import React from "react";
import classes from "./Projects.module.css";
import edie from "../../assets/edie-homepage.png";
import portfolio from "../../assets/portfolio_screenshot.png";
import tip from "../../assets/tip-calculator-project.png";
import calculator from "../../assets/calculator-app.png";

const Projects = (props) => {
  return (
    <div id='projects' className={classes.project}>
      <div className={classes.container}>
        <div>
          <h2 className={classes.h2_heading}>A Few Of My Recent Projects</h2>
          <p className={classes.p_heading}>
            {" "}
            Listed below are some of the most representative projects I've
            worked on. They range from basic web design to advanced web
            development for online shops
          </p>
        </div>
        <div className={classes.items}>
          <div className={classes.column}>
            <div className={classes.text_container}>
              <div className={classes.image_container}>
                <a href='https://drew-portfolio.netlify.app'>
                  <img
                    className={classes.img_fluid}
                    src={portfolio}
                    alt='portfolio website'
                  />
                </a>
              </div>
              <p className={classes.details}>
                <span>
                  {" "}
                  <strong>Live-site:</strong>
                  <a href='https://drew-portfolio.netlify.app'>Site</a>
                </span>
                <span>
                  <strong>GitHub:</strong>
                  <a href='https://github.com/drew-chidi/portfolio'>details</a>
                </span>
              </p>
            </div>
            <div className={classes.text_container}>
              <div className={classes.image_container}>
                <a href='https://edie-homepagedjfu.netlify.app'>
                  <img
                    className={classes.img_fluid}
                    src={edie}
                    alt='alternative'
                  />
                </a>
              </div>
              <p className={classes.details}>
                <span>
                  {" "}
                  <strong>Live-site:</strong>
                  <a href='https://edie-homepagedjfu.netlify.app'>Site</a>
                </span>
                <span>
                  <strong>GitHub:</strong>
                  <a href='https://github.com/drew-chidi/edie-landing-page'>
                    details
                  </a>
                </span>
              </p>
            </div>
            <div className={classes.text_container}>
              <div className={classes.image_container}>
                <a href={"https://tip-calculator-drew.netlify.app/"}>
                  <img
                    className={classes.img_fluid}
                    src={tip}
                    alt='alternative'
                  />
                </a>
              </div>
              <p className={classes.details}>
                <span>
                  {" "}
                  <strong>Live-site:</strong>
                  <a
                    class='blue'
                    href='https://tip-calculator-drew.netlify.app/'
                  >
                    Site
                  </a>
                </span>
                <span>
                  <strong>GitHub:</strong>
                  <a href='https://github.com/drew-chidi/tip-calculator'>
                    details
                  </a>
                </span>
              </p>
            </div>
            <div className={classes.text_container}>
              <div className={classes.image_container}>
                <a href='https://calculator-app1eh5.netlify.app/'>
                  <img
                    className={classes.img_fluid}
                    src={calculator}
                    alt='calculator app'
                  />
                </a>
              </div>
              <p className={classes.details}>
                <span>
                  {" "}
                  <strong>Live-site:</strong>
                  <a
                    class='blue'
                    href='https://calculator-app1eh5.netlify.app/'
                  >
                    Site
                  </a>
                </span>
                <span>
                  <strong>GitHub:</strong>
                  <a href='https://github.com/drew-chidi/calculator-cool'>
                    details
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
