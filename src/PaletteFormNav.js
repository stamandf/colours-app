import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';

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
      flexDirection: "row",
      justifyContent: "space-between",
      height: "64px"
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
      },
    navBtns: {}
});

class PaletteFormNav extends React.Component {
    constructor(props) {
        super(props);
        this.state= { newPaletteName: "" };
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

    handleChange = (e) => {
        this.setState( { [e.target.name]: e.target.value })
      }

    render() {
        const { classes, open } = this.props;
        const { newPaletteName } = this.state;
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
                  onClick={this.props.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Create a Palette
                </Typography>
              </Toolbar>
                 <div className={classes.navBtns}>
                    <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)} ref='form'>
                        <TextValidator 
                            label="Palette Name"
                            name="newPaletteName" 
                            value={newPaletteName} 
                            onChange={this.handleChange} 
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter Palette Name", "Palette Name already in use!"]}
                            />
                        
                        <Button variant="contained" color="primary" type="submit">
                            Save Palette
                        </Button>
                    </ValidatorForm>
                    <Link to="/">
                            <Button variant="contained" color="secondary">Go Back</Button>
                    </Link>
                </div>
            </AppBar>

            </div>
        );
    }

}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);