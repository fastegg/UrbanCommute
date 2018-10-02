import * as React from 'react';
import * as Nav from 'nav/navigation';

interface LinkProps {
  location: string | string[];
  params?: StashOf<string>;
  newWindow?: boolean;
  target?: string;
  className?: string;
}

export class Link extends React.Component<LinkProps> {
  onClick = (e) => {
    console.log('go to ' + this.props.location);
    Nav.go(this.props.location, this.props.params);
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const aProps = {
      className: this.props.className,
      target: this.props.target || (this.props.newWindow ? '_blank_' : undefined),
      onClick: this.onClick,
      href: Nav.getFullUrl(this.props.location, this.props.params),
    }

    return <a {...aProps}>{this.props.children}</a>
  }
}