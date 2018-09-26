import * as React from 'react';
import * as ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: 'jss-insertion-point',
});


export class ReactApp {

  el: Element = null;

  constructor(el: Element) {
    this.el = el;
  }

  mount(App) {
    ReactDOM.render(<JssProvider jss={jss} generateClassName={generateClassName}><App /></JssProvider>, this.el);
  }
}