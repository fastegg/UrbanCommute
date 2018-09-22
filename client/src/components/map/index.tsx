import * as React from 'react';
import { Col } from 'components/flex';
import { fill } from './style.css';
import { newMap, unloadMap, zoomMapToCurrentLocation } from 'api/maps';

interface mapProps {
  mapKey: string;
  mapOptions?: any; //TODO: generate map options interface
}

interface mapState {
  following: boolean
}

const gDefaultProps = {
  center: {lat: 0, lng: 0}, 
  zoom: 2,
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false
}

export class Map extends React.Component<mapProps, mapState> {
  _map: any = null;
  state = {
    following: false,
  };

  getMapID = (key?: string) => {
    return `map-${key || this.props.mapKey}`;
  }
  generateMapOptions = () => {
    return {
      ...gDefaultProps,
      ...this.props.mapOptions
    }
  }
  componentWillUnmount() {
    unloadMap(this.props.mapKey);
  }
  componentDidMount() {
    this._map = newMap(this.props.mapKey, document.getElementById(this.getMapID()), this.generateMapOptions());
    zoomMapToCurrentLocation(this.props.mapKey);
  }
  componentDidUpdate(lastProps: mapProps) {
    if (lastProps.mapKey !== this.props.mapKey) {
      unloadMap(this.props.mapKey);
      this._map = newMap(this.props.mapKey, document.getElementById(this.getMapID()), this.generateMapOptions());
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