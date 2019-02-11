import React, { Component } from 'react';

class Puzzels extends Component {
  puzzel = num => {
    if (num === 1) {
      return num;
    }
    // debugger;
    return num * this.puzzel(num - 1);
  };
  render() {
    return <div>{this.puzzel(5)}</div>;
  }
}

export default Puzzels;

function factorialize(num) {
  if (num === 1) {
    return num;
  }
  // debugger;
  return num * factorialize(num - 1);
}

console.log(factorialize(6));
