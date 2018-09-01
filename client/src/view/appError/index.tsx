import * as React from 'react';
import { box, crashIcon } from './style.css';
import Bikecrash from './images/bikecrash.svg';

console.log(Bikecrash);

export class AppError extends React.Component {
  render() {
    return (<div className={box}><Bikecrash className={crashIcon} />
      <div>Oh no, something bad happened!</div>
    </div>);
  }
}