import * as React from 'react';
import { style } from './style.css';
import { TextField } from '@material-ui/core';

export class TextEntry extends React.Component<{id: string, error?: boolean}> {
  render() {
    return <TextField {...this.props, {className: style }} />
  }
}
