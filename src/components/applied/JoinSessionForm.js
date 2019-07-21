import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const JoinSessionForm = () => {
  return (
    <>
      <h1>Join a Quiz</h1>
      <Form>
        <Form.Control type="text" size="lg" placeholder="Session Id" />
        <Button variant="primary" size="lg" type="submit" block>
          Join
        </Button>
      </Form>
    </>
  );
};

export default JoinSessionForm;
