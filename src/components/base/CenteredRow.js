/** @jsx jsx */
import Row from 'react-bootstrap/Row';
import { css, jsx } from '@emotion/core';

const centered = css`
  margin-top: auto;
  margin-bottom: auto;
`;

const CenteredRow = ({ children }) => {
  return <Row css={[centered]}>{children}</Row>;
};

export default CenteredRow;
