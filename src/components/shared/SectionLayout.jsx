import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import classes from './SectionHeader.module.css';

const SectionLayout = ({ children }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div>
      <section
        id='about'
        className={`${classes.s_wrapper} ${classes.target_section} ${
          theme === 'dark' && classes.themeMode
        }`}
      >
        <div className={classes.container}>
          {/* Title */}
          <div>
            <h2 className={classes.section_heading}>About me</h2>
            <hr className={classes.divider} />
          </div>

          {/* Content */}
          <Fragment>{children}</Fragment>
        </div>
      </section>
    </div>
  );
};

export default SectionLayout;
