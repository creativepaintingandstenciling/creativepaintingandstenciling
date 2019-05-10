import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Header from './header';

import Reboot from '../styles/reboot';
import theme from '../styles/theme';

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

function Layout({ children }) {
  const { title } = useSiteMetadata();

  return (
    <>
      <Reboot />
      <ThemeProvider theme={theme}>
        <>
          <Header siteTitle={title} />
          <Container>
            <main>{children}</main>
            {/* <footer>
              © {new Date().getFullYear()} {title}
            </footer> */}
          </Container>
        </>
      </ThemeProvider>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
