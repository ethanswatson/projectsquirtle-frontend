/** @jsx jsx */ // eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from 'react-bootstrap/Button';
import { css, jsx } from '@emotion/core'

const buttonStyles = css`
  margin-top: 8px;
`;

const SubmitButton = ({ children, disabled }) => {
  return (
    <Button
      variant='primary'
      css={[buttonStyles]}
      size='lg'
      type='submit'
      block
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default SubmitButton;
