import React from 'react';

import FlickityStyles from '../styles/flickity';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Carousel from '../components/carousel';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FlickityStyles />

      <Carousel />
    </Layout>
  );
}

export default IndexPage;
