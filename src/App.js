import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import NewPaletteForm from './NewPaletteForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { palettes: seedColors };
  }
  findPalette = (id) => {
    return this.state.palettes.find((palette)=> (palette.id === id));
  }
  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
    console.log(newPalette);
  }
  render() {
    return (
      <Switch>
        <Route 
          exact
          path='/palette/new'
          render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps}
          />}
        />
        <Route
          exact 
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
                colorId={routeProps.match.params.colorId} 
                palette= {generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
            />
          )}
        />
        <Route 
          exact 
          path='/' 
          render={(routeProps) => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )} 
        />
        <Route 
          exact 
          path='/palette/:id'
          render={routeProps => (
            <Palette 
                palette= {generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
            />
          )}
        />
      </Switch>
      
    )
  }
}