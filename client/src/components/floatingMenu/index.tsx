import * as React from 'react';
import { Col } from 'components/flex';
import { window } from './style.css';

export class FloatingMenu extends React.Component {
  render() {
    return (
      <Col className={window}>
        <div>{this.props.children}</div>
      </Col> 
    );
  }
}