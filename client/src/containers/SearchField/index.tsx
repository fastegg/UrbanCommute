import * as React from 'react';
import Component from 'Component';
import { TextField } from '@material-ui/core';
import { textEntry } from './style.css';

export class SearchField extends Component<{id: string}> {
  private curTimeout: number;
  private lastKnownValue: string;
  onChange = ({target}) => {
    this.lastKnownValue = target.value;
    this.curTimeout = this.curTimeout || this.setTimeout(() => {
      console.log(this.lastKnownValue);
      this.curTimeout = 0;
    }, 500);
  }
  render() {
    return (
      <TextField id={this.props.id} onChange={this.onChange} className={ textEntry } />
    )
  }
}