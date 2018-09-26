import * as React from 'React';

export type TextEntryTypes = 
  'text' |
  'password' |
  'email' |
  'number' | 
  'search' |
  'tel' |
  'url'

type onChangeFunc = (value:string) => void;

export interface InputProps {
  type?: TextEntryTypes;
  value?: string;
  onChange?: onChangeFunc;
  className?: string;
}

export class TextEntry extends React.Component<InputProps> {
  private _value: string = this.props.value;
  getValue = () => {
    return this._value;
  }
  static defaultProps = {
    type: 'text',
    value: '',
  }
  onChange = (e) => {
    this._value = e.target.value;
    this.props.onChange && this.props.onChange(this._value);
  }
  render() {
    return (<input className={this.props.className} type={this.props.type} onChange={this.onChange} />);
  }
}