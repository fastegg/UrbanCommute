import * as React from 'react';
import { column, row } from './style.css';

interface sharedProps {
  className?: string;
  style?: any;
}

export class Col extends React.Component<sharedProps> {
  render() {
    return <div {...this.props} className={`${column} ${this.props.className || ''}`}>{this.props.children}</div>;
  }
}

export class Row extends React.Component<sharedProps> {
  render() {
    return <div {...this.props} className={`${row} ${this.props.className || ''}`}>{this.props.children}</div>
  }
}

export default {
  Row: Row,
  Col: Col,
};