import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import SubmitButton from '../../base/SubmitButton';

const CreateQuizForm = () => {
  const [quizName, setQuizName] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const handleSubmit = () => {
    console.log(`name: ${quizName}`);
    console.log(`desc: ${quizDescription}`);
  }
  return (
    <>
      <h1>Create a Quiz</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Quiz Name</Form.Label>
        <Form.Control
          type='text'
          name='quizName'
          value={quizName}
          onChange={e => setQuizName(e.target.value)}
        />
        <Form.Label>Quiz Description</Form.Label>
        <Form.Control
          as='textarea'
          rows='3'
          value={quizDescription}
          onChange={e => setQuizDescription(e.target.value)}
        />
        <SubmitButton>Create</SubmitButton>
      </Form>
    </>
  );
}

export default CreateQuizForm;