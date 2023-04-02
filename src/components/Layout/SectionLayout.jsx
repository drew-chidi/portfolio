import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import classes from './SectionLayout.module.css';

const SectionLayout = ({ children, id, title }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <>
      <section
        id={id}
        className={`${classes.s_wrapper} ${classes.target_section} ${
          theme === 'dark' && classes.themeMode
        }`}
      >
        <div className={classes.container}>
          {/* Title */}
          <div>
            <h2 className={classes.section_heading}>{title}</h2>
            <hr className={classes.divider} />
          </div>

          {/* Content */}
          <Fragment>{children}</Fragment>
        </div>
      </section>
    </>
  );
};

export default SectionLayout;
