import React from 'react';
import { useForm } from 'react-hook-form';
import classes from './Contact.module.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import SectionLayout from '../Layout/SectionLayout';
import { motion } from 'framer-motion';

const Contact = ({ setSelectedPage }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <SectionLayout
      id='contact'
      title='Contact details'
      setSelectedPage={setSelectedPage}
    >
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col_lg_12}>
            <p className={classes.p_heading}>
              Have a new project in mind? Let's collaborate and build something
              awesome. Let's turn that idea to an even greater product :){' '}
              <address>
                <a class='blue no-line' href='mailto:chidi.andrew@gmail.com'>
                  <AiOutlineMail /> chidi.andrew@gmail.com
                </a>
                <br />
                <a href='tel:+2348063120245'>
                  <BsTelephone /> 0806-312-0245
                </a>
              </address>
            </p>
          </div>
        </div>
        <motion.div
          className={classes.row}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ transition: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className={classes.col_lg_12}>
            {/*Contact Form  */}
            <form
              id='contactForm'
              action='https://formsubmit.co/5a9b51cbf8c6f4b08a2ce505569c494d'
              method='POST'
              target='_blank'
              onSubmit={onSubmit}
            >
              <div className={classes.form_group}>
                <input
                  type='text'
                  className={classes.form_control_input}
                  id='cname'
                  name='name'
                  required
                  {...register('name', {
                    required: true,
                    maxLength: 100,
                  })}
                />
                <label className={classes.label_control} htmlFor='cname'>
                  Name
                </label>
                {errors.name && (
                  <p>
                    {errors.name.type === 'required' &&
                      'This field is required.'}
                    {errors.name.type === 'maxLength' &&
                      'Max length is a 100 characters.'}
                  </p>
                )}
              </div>
              <div className={classes.form_group}>
                <input
                  type='email'
                  className={classes.form_control_input}
                  id='cemail'
                  name='email'
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                <label className={classes.label_control} htmlFor='cemail'>
                  Email
                </label>
                {errors.name && (
                  <p>
                    {errors.name.type === 'required' &&
                      'This field is required.'}
                    {errors.name.type === 'pattern' && 'Not a valid email'}
                  </p>
                )}
              </div>
              <div className={classes.form_group}>
                <textarea
                  className={classes.form_control_textarea}
                  id='cmessage'
                  name='message'
                  {...register('name', {
                    required: true,
                    maxLength: 2000,
                  })}
                ></textarea>
                <label className={classes.label_control} htmlFor='cmessage'>
                  Project details
                </label>
                {errors.name && (
                  <p>
                    {errors.name.type === 'required' &&
                      'This field is required.'}
                    {errors.name.type === 'maxLength' &&
                      'Max length is a 2000 characters.'}
                  </p>
                )}
              </div>
              <div className={classes.form_group}>
                <button type='submit' class='form-control-submit-button'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
