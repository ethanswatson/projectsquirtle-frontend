/** @jsx jsx */ // eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { css, jsx } from '@emotion/core';

const buttonStyles = css`
  margin-top: 8px;
`;

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
        <Button
          variant='primary'
          css={[buttonStyles]}
          size='lg'
          type='submit'
          block
          disabled={sessionId.length !== 6}
        >
          Join
        </Button>
      </Form>
    </>
  );
};

export default JoinSessionForm;
