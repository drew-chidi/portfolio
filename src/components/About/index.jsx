import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { SelectedPage } from '../../shared';
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from '../../data/index';
import classes from './About.module.css';
import SectionLayout from '@/components/Layout/SectionLayout';

const About = ({ setSelectedPage }) => {
  const theme = useSelector((state) => state.theme.mode);

  // Invert Themes for skills List
  let invertTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
      <SectionLayout id='about' title='About me'>
        <div className={classes.container}>
          {/* a bit about myself */}
          <div className={classes.row}>
            <h3>{dataabout.title}</h3>
            <p className={classes.aboutme_p}>{dataabout.aboutme}</p>
          </div>

          {/* Work Timeline */}
          <div className={classes.row}>
            <h3>Work Timeline</h3>
            <div className={classes.col}>
              <table className={`${classes.table} ${classes.caption_top}`}>
                <tbody>
                  {worktimeline.map((data, i) => {
                    return (
                      <tr key={i} className={classes.table_row}>
                        <th scope='row' className={classes.cell_wrapper}>
                          {data.jobtitle}
                        </th>
                        <td className={classes.cell_wrapper}> {data.where}</td>
                        <td className={classes.cell_wrapper}>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Skills */}
          <div className={classes.row}>
            <h3>Skills</h3>
            <div className={`${classes.skills_wrapper}`}>
              {' '}
              {skills.map((data, i) => {
                return (
                  <div key={i}>
                    <p className={`${classes.skill} ${invertTheme}`}>
                      {data.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className={classes.row} id='services'>
            <h3>Services</h3>
            <div className={classes.services_details}>
              {services.map((data, i) => {
                return (
                  <div key={i} className={classes.service_wrapper}>
                    <h5 className={classes.service_title}>{data.title}</h5>
                    <p className={classes.service_desc}>{data.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionLayout>
    </motion.div>
  );
};

export default About;
