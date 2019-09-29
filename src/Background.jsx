import React, { PureComponent } from 'react';
import './App.css';

export default class Background extends PureComponent {
  render() {
    return (
      <div className="background">{this.props.children}</div>
    )
  }
}