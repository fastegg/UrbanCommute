import * as React from 'react';
import { box, crashIcon, link, text, title } from './style.css';
import Bikecrash from './images/bikecrash.svg';
import { Col, Row } from 'components/flex';

export class AppError extends React.Component {
  render() {
    return (<Col className={box}>
      <Row className={title}>OOPS!</Row>
      <Row><Bikecrash className={crashIcon} /></Row>
      <Row className={text}><p>Something went wrong. Return <span><a className={link} href=''>home</a></span> and try again!</p></Row>
    </Col>);
  }
}