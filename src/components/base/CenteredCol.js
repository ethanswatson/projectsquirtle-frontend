/** @jsx jsx */
import Col from 'react-bootstrap/Col';
import { css, jsx } from '@emotion/core';

const centered = css`
  float: none;
  margin 0 auto;
`;

const CenteredCol = ({ children, lg, md, sm, xl, xs }) => {
  return (
    <Col lg={lg} md={md} sm={sm} xl={xl} xs={xs} css={[centered]}>
      {children}
    </Col>
  );
};

export default CenteredCol;
