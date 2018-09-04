import * as React from 'react';
import { Map } from 'components/map';
import { FloatingMenu } from 'components/floatingMenu';
import { Col } from 'components/flex';
import { FullPage } from './style.css';

export class Home extends React.Component {
  render() {
    return (
      <Col className={FullPage}>
        <Map mapKey='primary' mapOptions={{center: {lat: -25.363, lng: 131.044}, zoom: 4}} />
        <FloatingMenu>
          <div>Check it out!</div>
        </FloatingMenu>
      </Col>
    );
  }
}