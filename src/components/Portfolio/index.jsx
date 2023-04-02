import React from 'react';
import SectionLayout from '../Layout/SectionLayout';
import edie from '../../assets/edie-homepage.png';
import portfolio from '../../assets/portfolio_screenshot.png';
import space from '../../assets/Space_Travel.png';
import tip from '../../assets/tip-calculator-project.png';
import calculator from '../../assets/calculator-app.png';
import ecommerce from '../../assets/ecommerce_screenshot.png';
import reactshop from '../../assets/reactshopbydrew.png';
import interactive from '../../assets/interactivecommentshot.png';
import classes from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <SectionLayout id='portfolio' title='Portfolio'>
      <div className={classes.items}>
        <div className={classes.column}>
          <div className={classes.text_container}>
            <div className={classes.image_container}>
              <a href='https://interactive-comments-fem.netlify.app/'>
                <img
                  className={classes.img_fluid}
                  src={interactive}
                  alt='ecommerce store'
                />
              </a>
            </div>
            <p className={classes.details}>
              <span>
                <strong>Live-site:</strong>
                <a href='https://interactive-comments-fem.netlify.app/'>Site</a>
              </span>
              <span>
                <strong>GitHub:</strong>
                <a href='https://github.com/drew-chidi/FEM-interactive-comments'>
                  details
                </a>
              </span>
            </p>
          </div>
          <div className={classes.text_container}>
            <div className={classes.image_container}>
              <a href='https://reactshopbydrew.netlify.app/'>
                <img
                  className={classes.img_fluid}
                  src={reactshop}
                  alt='ecommerce store'
                />
              </a>
            </div>
            <p className={classes.details}>
              <span>
                <strong>Live-site:</strong>
                <a href='https://reactshopbydrew.netlify.app/'>Site</a>
              </span>
              <span>
                <strong>GitHub:</strong>
                <a href='https://github.com/drew-chidi/reactshop'>details</a>
              </span>
            </p>
          </div>
          <div className={classes.text_container}>
            <div className={classes.image_container}>
              <a href='https://ecommerce-product-page-drew.netlify.app/'>
                <img
                  className={classes.img_fluid}
                  src={ecommerce}
                  alt='Space Tourism'
                />
              </a>
            </div>
            <p className={classes.details}>
              <span>
                <strong>Live-site:</strong>
                <a href='https://ecommerce-product-page-drew.netlify.app/'>
                  Site
                </a>
              </span>
              <span>
                <strong>GitHub:</strong>
                <a href='https://github.com/drew-chidi/ecommerce-product-page'>
                  details
                </a>
              </span>
            </p>
          </div>
          <div className={classes.text_container}>
            <div className={classes.image_container}>
              <a href='https://space-tourism-drew.netlify.app'>
                <img
                  className={classes.img_fluid}
                  src={space}
                  alt='Space Tourism'
                />
              </a>
            </div>
            <p className={classes.details}>
              <span>
                <strong>Live-site:</strong>
                <a href='https://space-tourism-drew.netlify.app'>Site</a>
              </span>
              <span>
                <strong>GitHub:</strong>
                <a href='https://github.com/drew-chidi/space-tourism'>
                  details
                </a>
              </span>
            </p>
          </div>
          <div className={classes.text_container}>
            <div className={classes.image_container}>
              <a href='https://drew-portfolio.netlify.app'>
                <img
                  className={classes.img_fluid}
                  src={portfolio}
                  alt='portfolio website'
                />
              </a>
            </div>
            <p className={classes.details}>
              <span>
                {' '}
                <strong>Live-site:</strong>
                <a href='https://drew-portfolio.netlify.app'>Site</a>
              </span>
              <span>
                <strong>GitHub:</strong>
                <a href='https://github.com/drew-chidi/portfolio'>details</a>
              </span>
            </p>
          </div>
          <div className={classes.text_container}>
            <div className={classes.image_container}>
              <a href='https://edie-homepagedjfu.netlify.app'>
                <img
                  className={classes.img_fluid}
                  src={edie}
                  alt='alternative'
                />
              </a>
            </div>
            <p className={classes.details}>
              <span>
                {' '}
                <strong>Live-site:</strong>
                <a href='https://edie-homepagedjfu.netlify.app'>Site</a>
              </span>
              <span>
                <strong>GitHub:</strong>
                <a href='https://github.com/drew-chidi/edie-landing-page'>
                  details
                </a>
              </span>
            </p>
          </div>
          <div className={classes.text_container}>
            <div className={classes.image_container}>
              <a href={'https://tip-calculator-drew.netlify.app/'}>
                <img
                  className={classes.img_fluid}
                  src={tip}
                  alt='alternative'
                />
              </a>
            </div>
            <p className={classes.details}>
              <span>
                {' '}
                <strong>Live-site:</strong>
                <a class='blue' href='https://tip-calculator-drew.netlify.app/'>
                  Site
                </a>
              </span>
              <span>
                <strong>GitHub:</strong>
                <a href='https://github.com/drew-chidi/tip-calculator'>
                  details
                </a>
              </span>
            </p>
          </div>
          <div className={classes.text_container}>
            <div className={classes.image_container}>
              <a href='https://calculator-app1eh5.netlify.app/'>
                <img
                  className={classes.img_fluid}
                  src={calculator}
                  alt='calculator app'
                />
              </a>
            </div>
            <p className={classes.details}>
              <span>
                {' '}
                <strong>Live-site:</strong>
                <a class='blue' href='https://calculator-app1eh5.netlify.app/'>
                  Site
                </a>
              </span>
              <span>
                <strong>GitHub:</strong>
                <a href='https://github.com/drew-chidi/calculator-cool'>
                  details
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Portfolio;

// import React from 'react';
// import classes from './Projects.module.css';
// import edie from '../../assets/edie-homepage.png';
// import portfolio from '../../assets/portfolio_screenshot.png';
// import space from '../../assets/Space_Travel.png';
// import tip from '../../assets/tip-calculator-project.png';
// import calculator from '../../assets/calculator-app.png';
// import ecommerce from '../../assets/ecommerce_screenshot.png';
// import reactshop from '../../assets/reactshopbydrew.png';
// import interactive from '../../assets/interactivecommentshot.png';

// const Porfolio = (props) => {
//   return (
//     <div id='portfolio' className={classes.project}>
//       <div className={classes.container}>
//         <div>
//           <h2 className={classes.h2_heading}>A Few Of My Recent Projects</h2>
//           <p className={classes.p_heading}>
//             Listed below are some of the most representative projects I've
//             worked on. They range from basic web design to advanced web
//             development for online shops
//           </p>
//         </div>
//         <div className={classes.items}>
//           <div className={classes.column}>
//             <div className={classes.text_container}>
//               <div className={classes.image_container}>
//                 <a href='https://interactive-comments-fem.netlify.app/'>
//                   <img
//                     className={classes.img_fluid}
//                     src={interactive}
//                     alt='ecommerce store'
//                   />
//                 </a>
//               </div>
//               <p className={classes.details}>
//                 <span>
//                   <strong>Live-site:</strong>
//                   <a href='https://interactive-comments-fem.netlify.app/'>
//                     Site
//                   </a>
//                 </span>
//                 <span>
//                   <strong>GitHub:</strong>
//                   <a href='https://github.com/drew-chidi/FEM-interactive-comments'>
//                     details
//                   </a>
//                 </span>
//               </p>
//             </div>
//             <div className={classes.text_container}>
//               <div className={classes.image_container}>
//                 <a href='https://reactshopbydrew.netlify.app/'>
//                   <img
//                     className={classes.img_fluid}
//                     src={reactshop}
//                     alt='ecommerce store'
//                   />
//                 </a>
//               </div>
//               <p className={classes.details}>
//                 <span>
//                   <strong>Live-site:</strong>
//                   <a href='https://reactshopbydrew.netlify.app/'>Site</a>
//                 </span>
//                 <span>
//                   <strong>GitHub:</strong>
//                   <a href='https://github.com/drew-chidi/reactshop'>details</a>
//                 </span>
//               </p>
//             </div>
//             <div className={classes.text_container}>
//               <div className={classes.image_container}>
//                 <a href='https://ecommerce-product-page-drew.netlify.app/'>
//                   <img
//                     className={classes.img_fluid}
//                     src={ecommerce}
//                     alt='Space Tourism'
//                   />
//                 </a>
//               </div>
//               <p className={classes.details}>
//                 <span>
//                   <strong>Live-site:</strong>
//                   <a href='https://ecommerce-product-page-drew.netlify.app/'>
//                     Site
//                   </a>
//                 </span>
//                 <span>
//                   <strong>GitHub:</strong>
//                   <a href='https://github.com/drew-chidi/ecommerce-product-page'>
//                     details
//                   </a>
//                 </span>
//               </p>
//             </div>
//             <div className={classes.text_container}>
//               <div className={classes.image_container}>
//                 <a href='https://space-tourism-drew.netlify.app'>
//                   <img
//                     className={classes.img_fluid}
//                     src={space}
//                     alt='Space Tourism'
//                   />
//                 </a>
//               </div>
//               <p className={classes.details}>
//                 <span>
//                   <strong>Live-site:</strong>
//                   <a href='https://space-tourism-drew.netlify.app'>Site</a>
//                 </span>
//                 <span>
//                   <strong>GitHub:</strong>
//                   <a href='https://github.com/drew-chidi/space-tourism'>
//                     details
//                   </a>
//                 </span>
//               </p>
//             </div>
//             <div className={classes.text_container}>
//               <div className={classes.image_container}>
//                 <a href='https://drew-portfolio.netlify.app'>
//                   <img
//                     className={classes.img_fluid}
//                     src={portfolio}
//                     alt='portfolio website'
//                   />
//                 </a>
//               </div>
//               <p className={classes.details}>
//                 <span>
//                   {' '}
//                   <strong>Live-site:</strong>
//                   <a href='https://drew-portfolio.netlify.app'>Site</a>
//                 </span>
//                 <span>
//                   <strong>GitHub:</strong>
//                   <a href='https://github.com/drew-chidi/portfolio'>details</a>
//                 </span>
//               </p>
//             </div>
//             <div className={classes.text_container}>
//               <div className={classes.image_container}>
//                 <a href='https://edie-homepagedjfu.netlify.app'>
//                   <img
//                     className={classes.img_fluid}
//                     src={edie}
//                     alt='alternative'
//                   />
//                 </a>
//               </div>
//               <p className={classes.details}>
//                 <span>
//                   {' '}
//                   <strong>Live-site:</strong>
//                   <a href='https://edie-homepagedjfu.netlify.app'>Site</a>
//                 </span>
//                 <span>
//                   <strong>GitHub:</strong>
//                   <a href='https://github.com/drew-chidi/edie-landing-page'>
//                     details
//                   </a>
//                 </span>
//               </p>
//             </div>
//             <div className={classes.text_container}>
//               <div className={classes.image_container}>
//                 <a href={'https://tip-calculator-drew.netlify.app/'}>
//                   <img
//                     className={classes.img_fluid}
//                     src={tip}
//                     alt='alternative'
//                   />
//                 </a>
//               </div>
//               <p className={classes.details}>
//                 <span>
//                   {' '}
//                   <strong>Live-site:</strong>
//                   <a
//                     class='blue'
//                     href='https://tip-calculator-drew.netlify.app/'
//                   >
//                     Site
//                   </a>
//                 </span>
//                 <span>
//                   <strong>GitHub:</strong>
//                   <a href='https://github.com/drew-chidi/tip-calculator'>
//                     details
//                   </a>
//                 </span>
//               </p>
//             </div>
//             <div className={classes.text_container}>
//               <div className={classes.image_container}>
//                 <a href='https://calculator-app1eh5.netlify.app/'>
//                   <img
//                     className={classes.img_fluid}
//                     src={calculator}
//                     alt='calculator app'
//                   />
//                 </a>
//               </div>
//               <p className={classes.details}>
//                 <span>
//                   {' '}
//                   <strong>Live-site:</strong>
//                   <a
//                     class='blue'
//                     href='https://calculator-app1eh5.netlify.app/'
//                   >
//                     Site
//                   </a>
//                 </span>
//                 <span>
//                   <strong>GitHub:</strong>
//                   <a href='https://github.com/drew-chidi/calculator-cool'>
//                     details
//                   </a>
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Porfolio;
