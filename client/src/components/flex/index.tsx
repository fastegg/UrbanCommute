import * as React from 'react';
import { column, row } from './style.css';

interface sharedProps {
  className?: string;
}

export class Col extends React.Component<sharedProps> {
  render() {
    return <div className={`${column} ${this.props.className}`}>{this.props.children}</div>;
  }
}

export class Row extends React.Component<sharedProps> {
  render() {
    return <div className={`${row} ${this.props.className}`}>{this.props.children}</div>
  }
}

export default {
  Row: Row,
  Col: Col,
};