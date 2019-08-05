import React from 'react'
import Page from '../components/applied/Page';
import CenteredRow from '../components/base/CenteredRow';
import CenteredCol from '../components/base/CenteredCol';
import CreateQuizForm from '../components/applied/CreateQuizForm'

const CreateQuiz = () => {
  return (
    <Page>
      <CenteredRow>
        <CenteredCol lg='4' md='10' xs='10'>
          <CreateQuizForm />
        </CenteredCol>
      </CenteredRow>
    </Page>
  );
}

export default CreateQuiz;
