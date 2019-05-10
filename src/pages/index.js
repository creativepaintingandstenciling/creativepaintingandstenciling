import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Carousel from '../components/carousel';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      {/* <Carousel /> */}
    </Layout>
  );
}

export default IndexPage;
