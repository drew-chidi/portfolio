import React from "react";
import classes from "./Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <div id='contact' className={classes.form_1}>
        <div className={classes.s_contact}>
          <h2>Contact details</h2>
        </div>

        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col_lg_12}>
              <p className={classes.p_heading}>
                Have a new project in mind? Let's collaborate and build
                something awesome. Let's turn that idea to an even greater
                product :){" "}
                <address>
                  <a class='blue no-line' href='mailto:chidi.andrew@gmail.com'>
                    <AiOutlineMail /> chidi.andrew@gmail.com
                  </a>
                  <br />
                  <a href='tel:+2348063120245'>
                    {" "}
                    <BsTelephone /> 0806-312-0245
                  </a>
                </address>
              </p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col_lg_12}>
              {/*Contact Form  */}
              <form
                id='contactForm'
                action='https://formsubmit.co/chidi.andrew@gmail.com'
                method='POST'
              >
                <div className={classes.form_group}>
                  <input
                    type='text'
                    className={classes.form_control_input}
                    id='cname'
                    required
                  />
                  <label className={classes.label_control} htmlFor='cname'>
                    Name
                  </label>
                </div>
                <div className={classes.form_group}>
                  <input
                    type='email'
                    className={classes.form_control_input}
                    id='cemail'
                    required
                  />
                  <label className={classes.label_control} htmlFor='cemail'>
                    Email
                  </label>
                </div>
                <div className={classes.form_group}>
                  <textarea
                    className={classes.form_control_textarea}
                    id='cmessage'
                    required
                  ></textarea>
                  <label className={classes.label_control} htmlFor='cmessage'>
                    Project details
                  </label>
                </div>
                <div className={classes.form_group}>
                  <button type='submit' class='form-control-submit-button'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
