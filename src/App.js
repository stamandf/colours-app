import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

export default class App extends React.Component {
  render() {
    return (
      <div>
          <Palette {...seedColors[4]}/>
      </div>
    )
  }
}