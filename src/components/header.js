import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '../styles/core';

const HeaderContainer = styled.header``;

const Title = styled.h1`
  font-family: 'Satisfy';

  a {
    text-decoration: none;
  }
`;

function Header({ siteTitle }) {
  return (
    <HeaderContainer>
      <Container>
        <Title>
          <Link to="/">{siteTitle}</Link>
        </Title>
      </Container>
    </HeaderContainer>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
