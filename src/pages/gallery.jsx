/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/gallery/hero';
import Photos from 'components/pages/gallery/photos';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const Gallery = () => (
  <Layout>
    <Hero />
    <Photos />
  </Layout>
);

export default Gallery;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.gallery} pathname={pathname} />
);
