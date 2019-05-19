import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import useFacebookPhotos from '../hooks/useFacebookPhotos';

function Portfolio() {
  const facebookPhotos = useFacebookPhotos();
  const photos = (facebookPhotos || []).map(({ id }) => {
    return id;
  });
  console.log(photos);
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      Portfolio
    </Layout>
  );
}

export default Portfolio;
