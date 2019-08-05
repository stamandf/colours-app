import React from 'react';
import { Link } from 'react-router-dom';
import PaletteFormNav from './PaletteFormNav';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 450;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});
  
class NewPaletteForm extends React.Component {
    static defaultProps = {
        maxColors: 20
    };
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            currentColor: "teal",
            colors: this.props.palettes[0].colors,
            newColorName: "",
          };
    }
    
    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value => 
            this.state.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', value => 
            this.state.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
    
      handleChange = (e) => {
        this.setState( { [e.target.name]: e.target.value })
      }
      updateCurrentColor = (newColor) => {
          this.setState( { currentColor: newColor.hex });
      }

      addNewColor = () => {
          const newColor = { 
              color: this.state.currentColor, 
              name: this.state.newColorName
            };
          this.setState({ colors: [...this.state.colors, newColor], newColorName: "" });
      }
      handleSubmit = (newPaletteName) => {
        const newPalette = {
            paletteName: newPaletteName, 
            id: newPaletteName.toLowerCase().replace(/ /g,"-"),
            colors: this.state.colors,
        };
        this.props.savePalette(newPalette);
        this.props.history.push("/");
      }

      removeColor = (colorName) => {
          this.setState( {
            colors: this.state.colors.filter(color => color.name !== colorName)
          });
      }
      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
          colors: arrayMove(colors, oldIndex, newIndex),
        }));
      };
      clearColors = () => {
          this.setState({ colors:[] } )
      }
      addRandomColor = () => {
        const allColors = this.props.palettes.map(p => p.colors).flat();
        let rand = Math.floor(Math.random() * allColors.length);
        const randomColor = allColors[rand];
        this.setState({
            colors: [...this.state.colors, randomColor]
        });
      }

      render() {
        const { classes, maxColors, palettes } = this.props;
        const { open, colors } = this.state;
        const paletteIsFull = colors.length >= maxColors;
    
        return (
          <div className={classes.root}>
            <PaletteFormNav 
                open={open} 
                classes={classes} 
                palettes={palettes} 
                handleSubmit={this.handleSubmit}
                handleDrawerOpen={this.handleDrawerOpen} />
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <Typography variant="h4">Design your own Palette</Typography>
              <div>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.button}
                    onClick={this.clearColors}
                >
                        Clear Palette
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    onClick={this.addRandomColor}
                    disabled={paletteIsFull}
                >
                        Random Color
                </Button>
                
              </div>
              <ChromePicker 
                color={this.state.currentColor} 
                onChangeComplete={this.updateCurrentColor}
              />
              <ValidatorForm onSubmit={this.addNewColor} ref='form'>
                  <TextValidator 
                      label='Color Name:'
                      value={this.state.newColorName}
                      name='newColorName'
                      onChange={this.handleChange}
                      validators={['required','isColorNameUnique', 'isColorUnique']}
                      errorMessages={['Enter a Color name', 'Color name must be unique.', 'Color already in use!']}
                  />
                  <Button 
                        variant="contained"
                        type='submit' 
                        color="primary"
                        disabled={paletteIsFull} 
                        className={classes.button}
                        style={{ 
                            backgroundColor: paletteIsFull ? "grey" : this.state.currentColor}}
                  >
                  {paletteIsFull ? "Palette Full" : "Add Color"}
                  </Button>
              </ValidatorForm>
              
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
               <DraggableColorList 
                    colors={colors} 
                    removeColor={this.removeColor} 
                    axis='xy'
                    onSortEnd={this.onSortEnd}    
                />
            </main>     
          </div>
        );
      }
    }
    export default withStyles(styles, { withTheme: true })(NewPaletteForm);    
