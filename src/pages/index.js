import Layout from '../Layout';
import React from 'react';

const index = () => {
  return (
    <>
      <Layout>
        <Home setSelectedPage={setSelectedPage} />
        <About setSelectedPage={setSelectedPage} />
        <Portfolio setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />
      </Layout>
    </>
  );
};

export default index;
