import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import styled from '@emotion/styled';
import colors from '../../constants/colors';
import GlobalHeader from './GlobalHeader';

const StyledPage = styled.main`
  background-color: ${colors.squirtle_gray};
  color: ${colors.white};
  height: 100vh;
  min-height: 100vh;
`;

const Page = ({ children }) => {
  return (
    <StyledPage>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <GlobalHeader />
      <Container>{children}</Container>
    </StyledPage>
  );
};

export default Page;
