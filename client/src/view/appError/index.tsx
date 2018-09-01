import * as React from 'react';
import { box, crashIcon, button } from './style.css';
import Bikecrash from './images/bikecrash.svg';
import { Col, Row } from 'components/flex';

export class AppError extends React.Component {
  render() {
    return (<Col className={box}>
      <Row><Bikecrash className={crashIcon} /></Row>
      <Row>Oh no, something bad happened!</Row>
      <Row><div className={button}>Go Home</div></Row>
    </Col>);
  }
}