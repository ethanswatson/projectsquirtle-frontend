import React from 'react';
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
      <GlobalHeader />
      {children}
    </StyledPage>
  );
};

export default Page;
