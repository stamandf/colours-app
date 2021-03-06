import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import Page from './Page';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';



export default class App extends React.Component {
  constructor(props){
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
  }
  findPalette = (id) => {
    return this.state.palettes.find((palette)=> (palette.id === id));
  }
  deletePalette = (id) => {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id)}),
      this.syncLocalStorage
    );
  }
  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage);
  }
  resetPaletteList = () => {
    window.localStorage.clear();
    // this.setState({ palettes: seedColors}, this.syncLocalStorage);
    this.setState({ palettes: seedColors});
    console.log("Reset Palette List! ", this.state.palettes);
  }
  syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }
  render() {
    return (
      <Route 
        render={({ location }) => (
              <TransitionGroup>
                  <CSSTransition key={location.key} classNames='page' timeout={500}>
                      <Switch location={location}>
                          <Route 
                            exact
                            path='/palette/new'
                            render={(routeProps) => (
                              <Page>
                                <NewPaletteForm 
                                    savePalette={this.savePalette} 
                                    palettes={this.state.palettes} 
                                    {...routeProps}
                                />
                              </Page>
                            )}
                          />
                          <Route
                            exact 
                            path="/palette/:paletteId/:colorId"
                            render={routeProps => (
                              <Page>
                                <SingleColorPalette
                                  colorId={routeProps.match.params.colorId} 
                                  palette= {generatePalette(
                                    this.findPalette(routeProps.match.params.paletteId)
                                  )}
                              />
                              </Page>
                            )}
                          />
                          <Route 
                            exact 
                            path='/' 
                            render={(routeProps) => (
                              <Page>
                                <PaletteList 
                                palettes={this.state.palettes}
                                deletePalette={this.deletePalette}
                                resetPaletteList={this.resetPaletteList} 
                                {...routeProps} 
                                />
                              </Page>
                            )} 
                          />
                          <Route 
                            exact 
                            path='/palette/:id'
                            render={routeProps => (
                              <Page>
                                <Palette 
                                  palette= {generatePalette(
                                    this.findPalette(routeProps.match.params.id)
                                  )}
                                />
                              </Page>
                            )}
                          />
                          <Route //Default route to prevent getting 404s
                            render={(routeProps) => (
                              <Page>
                                <PaletteList 
                                palettes={this.state.palettes}
                                deletePalette={this.deletePalette}
                                resetPaletteList={this.resetPaletteList} 
                                {...routeProps} 
                                />
                              </Page>
                            )} 
                          />
                    </Switch>
                  </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}