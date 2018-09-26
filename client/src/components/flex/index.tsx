import * as React from 'react';
import { column, row } from './style.css';

interface sharedProps {
  className?: string;
  style?: any;
  flexGrow?: number;
}

function styleObj(props: sharedProps) {
  if (props.flexGrow) {
    return {flexGrow: props.flexGrow};
  }
  return null;
}

export class Col extends React.Component<sharedProps> {
  render() {
    return <div {...this.props} style={styleObj(this.props)} className={`${column} ${this.props.className || ''}`}>{this.props.children}</div>;
  }
}

export class Row extends React.Component<sharedProps> {
  render() {
    return <div {...this.props} style={styleObj(this.props)} className={`${row} ${this.props.className || ''}`}>{this.props.children}</div>
  }
}

export default {
  Row: Row,
  Col: Col,
};