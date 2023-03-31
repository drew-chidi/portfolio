import React from "react";
import { useSelector } from "react-redux";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../data/index";
import classes from "./About.module.css";

const About = () => {
  const theme = useSelector((state) => state.theme.mode);

  // Invert Themes for skills List
  let invertTheme = theme === "dark" ? "light" : "dark";

  return (
    <section
      id='about'
      className={`${classes.s_about} ${classes.target_section} ${
        theme === "dark" && classes.themeMode
      }`}
    >
      <div className={classes.container}>
        {/* Title */}
        <div>
          <h2 className={classes.section_heading}>About me</h2>
          <hr className={classes.divider} />
        </div>
        {/* a bit about myself */}
        <div className={classes.row}>
          <h3>{dataabout.title}</h3>
          <p>{dataabout.aboutme}</p>
        </div>

        {/* Work Timeline */}
        <div className={classes.row}>
          <h3>Work Timeline</h3>
          <div>
            {" "}
            <table className={`${classes.table} ${classes.caption_top}`}>
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope='row'>{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
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
            {" "}
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <p className={`${classes.skill} ${invertTheme}`}>
                    {data.name}
                  </p>
                  {/* <h3 className='progress-title'>{data.name}</h3> */}
                  {/* <div className='progress'>
                    <div
                      className='progress-bar'
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className='progress-value'>{data.value}%</div>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div className={classes.row}>
          <h3>Services</h3>
          <div>
            {services.map((data, i) => {
              return (
                <div className='service_ py-4' key={i}>
                  <h5 className='service__title'>{data.title}</h5>
                  <p className='service_desc'>{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.column}>
            <h2>About Me</h2>

            <div className={classes.text_container}>
              <p>
                I love to create beautiful and efficient websites. With 18
                months experience, I have a passion for responsive website
                design and a proponent of mobile first approach. I currently aim
                to learn as much as I can in a work environment and further my
                own abilities in a professional setting.
              </p>
            </div>
          </div>

          <div className={classes.column}>
            <div>
              <div className={classes.time}>September, 2021 - PRESENT</div>
              <h6>Frontend Developer</h6>
              <p>Frontend Web developer for Segalerty</p>
              <div className={classes.time}>June, 2021 - PRESENT</div>
              <h6>Web Developer</h6>
              <p>Freelancing and working on my personal projects</p>
            </div>
          </div>
          <div className={classes.column}>
            <div>
              <div className={classes.time}>December, 2020 - March, 2021</div>
              <h6>Intern</h6>
              <p>Frontend intern for Styleest</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
