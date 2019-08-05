import React from 'react';
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
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
    padding: theme.spacing.unit * 3,
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
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            currentColor: "teal",
            colors: [{color: "blue", name: "blue"}],
            newColorName: "",
            newPaletteName: ""
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
          const newColor = { color: this.state.currentColor, name: this.state.newColorName};
          this.setState({ colors: [...this.state.colors, newColor], newColorName: "" });
      }
      handleSubmit = () => {
        let newPaletteName = this.state.newPaletteName;
        const newPalette = {
            paletteName: newPaletteName, 
            id: newPaletteName.toLowerCase().replace(/ /g,"-"),
            colors: this.state.colors,
        };
        this.props.savePalette(newPalette);
        this.props.history.push("/");
      }
      render() {
        const { classes } = this.props;
        const { open } = this.state;
    
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              color="default"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Persistent drawer
                </Typography>
                <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
                    <TextValidator 
                        label="Palette Name"
                        name="newPaletteName" 
                        value={this.state.newPaletteName} 
                        onChange={this.handleChange} 
                        validators={["required", "isPaletteNameUnique"]}
                        errorMessages={["Enter Palette Name", "Palette Name already in use!"]}
                        />
                    <Button variant="contained" color="primary" type="submit">
                        Save Palette
                    </Button>
                </ValidatorForm>
              </Toolbar>
            </AppBar>
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
                <Button variant="contained" color="secondary" className={classes.button}>
                        Clear Palette
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
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
                        className={classes.button}
                        style={{ backgroundColor: this.state.currentColor}}
                  >
                        Add Color
                  </Button>
              </ValidatorForm>
              
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
                {this.state.colors.map(color => (
                    <DraggableColorBox color={color.color} name={color.name} />
                ))}
            </main>     
          </div>
        );
      }
    }
    export default withStyles(styles, { withTheme: true })(NewPaletteForm);    
