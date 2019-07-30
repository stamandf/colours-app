import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

export default class App extends React.Component {
  render() {
    console.log(generatePalette(seedColors[4], 5));
    return (
      <div>
          <Palette palette={generatePalette(seedColors[4])}/>
      </div>
    )
  }
}