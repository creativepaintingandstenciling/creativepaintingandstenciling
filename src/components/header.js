import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'rebass';

import { Container } from '../styles/core';

const HeaderContainer = styled.header``;

const Title = styled.h1`
  font-family: 'Satisfy';
  font-size: 2.4rem;
  margin-bottom: 0;

  a {
    text-decoration: none;
  }
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-right: 24px;
  font-size: 21px;
`;

function Header({ siteTitle }) {
  return (
    <HeaderContainer>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Title>
            <Link to="/">{siteTitle}</Link>
          </Title>

          <nav>
            <List>
              <ListItem>
                <Link to="/portfolio">Portfolio</Link>
              </ListItem>
              <ListItem>
                <Link to="/services">Services</Link>
              </ListItem>
              <ListItem>
                <Link to="/contact">Contact</Link>
              </ListItem>
            </List>
          </nav>
        </Flex>
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
