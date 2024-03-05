import { introdata } from '../../data';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { SelectedPage } from '../../shared';

import classes from './Home.module.css';

const Home = ({ setSelectedPage }) => {
  return (
    <motion.section
      id='home'
      className={classes.header}
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.text_container}>
            <h1 className={classes.h1_large}>
              {introdata.title} <br />
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
            </h1>
            <p className={classes.description}>{introdata.description}</p>
            <div className={classes.home_btn_group}>
              <a
                target='blank'
                className={classes.btn_solid_lg}
                href='https://docs.google.com/document/d/147PlLEjqzvAlXvWQGu2xGPe7U0zWMmDkBh_JWv1JZus/edit?usp=sharing'
              >
                Download CV
              </a>
              <a className={classes.btn_outline_lg} href='#contact'>
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
