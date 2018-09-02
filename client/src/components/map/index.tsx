import * as React from 'react';
import { Col } from 'components/flex';
import { fill } from './style.css';
import { newMap, unloadMap } from 'api/maps';

interface mapProps {
  mapKey: string;
  mapOptions: any; //TODO: generate map options interface
}

export class Map extends React.Component<mapProps> {
  getMapID = (key?: string) => {
    return `map-${key || this.props.mapKey}`;
  }
  componentWillUnmount() {
    unloadMap(this.props.mapKey);
  }
  componentDidMount() {
    newMap(this.props.mapKey, document.getElementById(this.getMapID()), this.props.mapOptions);
  }
  componentDidUpdate(lastProps: mapProps) {
    if (lastProps.mapKey !== this.props.mapKey) {
      unloadMap(this.props.mapKey);
      newMap(this.props.mapKey, document.getElementById(this.getMapID()), this.props.mapOptions);
    }
  }
  render() {
    return (
      <Col className={fill}>
        <div ref={this.getMapID()} id={this.getMapID()} className={fill}/>
      </Col>
    );
  }
}