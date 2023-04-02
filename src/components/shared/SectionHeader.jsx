import React, { Fragment } from 'react';

const SectionHeader = () => {
  return (
    <Fragment>
      <div>
        <h2 className={classes.section_heading}>About me</h2>
        <hr className={classes.divider} />
      </div>
    </Fragment>
  );
};

export default SectionHeader;
