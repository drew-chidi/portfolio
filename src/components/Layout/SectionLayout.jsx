import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import classes from './SectionLayout.module.css';
import { motion } from 'framer-motion';

const SectionLayout = ({ children, id, title }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section
      id={id}
      className={`${classes.s_wrapper} ${classes.target_section} ${
        theme === 'dark' && classes.themeMode
      }`}
    >
      <motion.div className={classes.container}>
        {/* Title */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ transition: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className={classes.section_heading}>{title}</h2>
          <hr className={classes.divider} />
        </motion.div>

        {/* Content */}
        <Fragment>{children}</Fragment>
      </motion.div>
    </section>
  );
};

export default SectionLayout;
