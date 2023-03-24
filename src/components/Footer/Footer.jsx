import React from "react";
import Copyright from "../Copyright/Copyright";
import classes from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col_lg_12}>
            <div className={classes.container}>
              <span className={classes.social_link}>
                <a href='https://www.linkedin.com/in/andrew-ofuenweuche-797a31aa/'>
                  <FaLinkedin />
                </a>
              </span>
              <span className={classes.social_link}>
                <a href='https://github.com/drew-chidi/'>
                  <FaGithub />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Copyright />
      </section>
    </div>
  );
};

export default Footer;
