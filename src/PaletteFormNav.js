import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PaletteIcon from '@material-ui/icons/Palette';
import BrushIcon from '@material-ui/icons/Brush';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles';

class PaletteFormNav extends React.Component {
    constructor(props) {
        super(props);
        this.state= { 
          newPaletteName: "", 
          formShowing: false 
        };
    }

    handleChange = (e) => {
        this.setState( { [e.target.name]: e.target.value })
      }

    showForm = () => {
      this.setState({ formShowing: true });
    } 
    
    hideForm = () => {
      this.setState({ formShowing: false });
    }  
    render() {
        const { classes, open, palettes } = this.props;
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
                  className={classNames(classes.menuButton, { [classes.hide]: open })}
                >
                  <PaletteIcon />
                  <BrushIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Create a Palette
                </Typography>
              </Toolbar>
                 <div className={classes.navBtns}>
                    <Link to="/">
                        <Button variant="contained" color="secondary" className={classes.button}>Go Back</Button>
                    </Link>
                        <Button 
                          variant="contained" 
                          color="primary" 
                          className={classes.button} 
                          onClick={this.showForm}
                        >
                      Save Palette
                    </Button>
                </div>
            </AppBar>
            {this.state.formShowing && (
              <PaletteMetaForm 
                handleSubmit={this.props.handleSubmit}
                handleChange={this.handleChange}
                palettes={palettes} 
                newPaletteName={newPaletteName} 
                hideForm={this.hideForm}
              />)}
              
            </div>
        );
    }

}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);