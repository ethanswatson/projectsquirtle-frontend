import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';

const JoinSessionForm = () => {
  return (
    <>
      <h1>Join a Quiz</h1>
      <Formik
        initialValues={{ sessionId: null }}
        validate={values => {
          const errors = {};
          if (!values.sessionId) {
            errors.sessionId = 'Required';
          }
          return errors;
        }}
      >
        <Form>
          <Form.Control
            type='text'
            name='sessionId'
            size='lg'
            placeholder='Session Id'
          />
          <Button variant='primary' size='lg' type='submit' block>
            Join
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default JoinSessionForm;
