import React, { Fragment } from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
