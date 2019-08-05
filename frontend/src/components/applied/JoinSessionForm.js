import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import SubmitButton from '../base/SubmitButton';

const JoinSessionForm = () => {
  const [sessionId, setSessionId] = useState('');

  const handleSubmit = () => {
    console.log(sessionId);
  };

  return (
    <>
      <h1>Join a Quiz</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type='text'
          name='sessionId'
          value={sessionId}
          onChange={e => setSessionId(e.target.value)}
          size='lg'
          maxLength='6'
          placeholder='Session Id'
        />
        <SubmitButton
          disabled={sessionId.length !== 6}
        >
          Join
        </SubmitButton>
      </Form>
    </>
  );
};

export default JoinSessionForm;
