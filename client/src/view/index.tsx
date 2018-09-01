import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class ReactApp {

  el: Element = null;

  constructor(el: Element) {
    this.el = el;
  }

  mount(App) {
    ReactDOM.render(<App />, this.el);
  }
}