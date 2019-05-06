import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '../styles/core';

const Heading = styled.h1`
  font-family: 'Satisfy';

  a {
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Heading>
        <Link to="/">{siteTitle}</Link>
      </Heading>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
