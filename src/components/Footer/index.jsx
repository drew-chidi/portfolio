import React from 'react';
import classes from './Footer.module.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Drew from '@/assets/drew.png';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        {/* CONTACT AND QUICK LINKS */}
        <div className={classes.info_wrapper}>
          {/* CONTACT */}
          <div className={classes.contact}>
            {/* IMAGE */}
            <div className={classes.imgWrapper}>
              <img src={Drew} alt='logo' />
            </div>
            <a href='mailto:chidi.andrew@gmail.com'>chidi.andrew@gmail.com</a>
          </div>
          <div className={classes.quick_links_wrapper}>
            <h3>Quick Links</h3>
            <ul className={classes.links}>
              <li>
                <a href='https://www.linkedin.com/in/andrew-ofuenweuche-797a31aa/'>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/andrew-ofuenweuche-797a31aa/'>
                  GitHub
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/andrew-ofuenweuche-797a31aa/'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/andrew-ofuenweuche-797a31aa/'>
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className={classes.row}>
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
        </div> */}
        <div className={classes.copyright_wrapper}>
          <hr className={classes.divider} />
          <p>© {'2021-present'}. Andrew Chidi. All rights reserved</p>{' '}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
