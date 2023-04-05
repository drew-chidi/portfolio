import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';

const index = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default index;
