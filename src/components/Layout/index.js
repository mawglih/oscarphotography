import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const index = ({
  children,
}) => {
  return (
    <Fragment>
      <Header />
        {children}
      <Footer />
    </Fragment>
  )
}

export default index;
