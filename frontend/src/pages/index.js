import React from 'react';
import CenteredRow from '../components/base/CenteredRow';
import CenteredCol from '../components/base/CenteredCol';
import Page from '../components/applied/Page';
import JoinSessionForm from '../components/applied/JoinSessionForm';

const Index = () => {
  return (
    <Page>
      <CenteredRow>
        <CenteredCol lg='4' md='10' xs='10'>
          <JoinSessionForm />
        </CenteredCol>
      </CenteredRow>
    </Page>
  );
};

export default Index;
