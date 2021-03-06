import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';

class PaletteList extends React.Component {
    
    state = {
        openDeleteDialog: false,
        openResetDialog: false,
        deletingId: ""
    }
    
    openDialog = (id) => {
        this.setState({ openDeleteDialog: true, deletingId: id });
    }

    openResetDialog = (id) => {
        this.setState({ openResetDialog: true });
    }

    handleDelete = () => {
        this.props.deletePalette(this.state.deletingId);
        this.closeDialog();
    }
    handleReset = () => {
        this.props.resetPaletteList();
        this.closeResetDialog();
    }
    closeResetDialog = () => {
        this.setState({ openResetDialog: false })
    }
    closeDialog = () => {
        this.setState({ openDeleteDialog: false, deletingId: "" })
    }
    
    goToPalette = (id) => {
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { palettes, classes } = this.props;
        const { openDeleteDialog, openResetDialog } = this.state; 
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>Colour Designer</h1>
                        <Button variant={"outlined"} className={classes.button} onClick={this.openResetDialog}>Reset</Button>
                        <Link className={classes.link} to="/palette/new">Create New Palette</Link>
                    </nav>
                        <TransitionGroup className={classes.palettes}>
                            {palettes.map(palette => (
                                <CSSTransition
                                    key={palette.id}
                                    classNames='fade'
                                    timeout={500}
                                >
                                    <MiniPalette 
                                        {...palette}
                                        openDialog={this.openDialog} 
                                        goToPalette={this.goToPalette}
                                        key={palette.id}
                                        id={palette.id}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                </div>
                <Dialog 
                    open={openDeleteDialog} 
                    aria-labelledby="delete-dialog-title"
                    onClose={this.closeDialog}
                >
                    <DialogTitle id="delete-dialog-title">Delete Palette?</DialogTitle>
                        <List>
                            <ListItem button onClick={this.handleDelete}>
                                <ListItemAvatar>
                                    <Avatar
                                        style={{ backgroundColor:green[100], color: green[600] }}
                                    >
                                        <CheckIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Delete" />
                            </ListItem>
                            <ListItem button onClick={this.closeDialog}>
                                <ListItemAvatar>
                                    <Avatar
                                        style={{ backgroundColor:red[100], color: red[600] }}
                                    >
                                        <CloseIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Cancel" />
                            </ListItem>
                        </List>
                </Dialog>
                <Dialog 
                    open={openResetDialog} 
                    aria-labelledby="reset-dialog-title"
                    onClose={this.closeResetDialog}
                >
                    <DialogTitle id="reset-dialog-title">Restore default Colors?</DialogTitle>
                        <List>
                            <ListItem button onClick={this.handleReset}>
                                <ListItemAvatar>
                                    <Avatar
                                        style={{ backgroundColor:green[100], color: green[600] }}
                                    >
                                        <CheckIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Reset" />
                            </ListItem>
                            <ListItem button onClick={this.closeResetDialog}>
                                <ListItemAvatar>
                                    <Avatar
                                        style={{ backgroundColor:red[100], color: red[600] }}
                                    >
                                        <CloseIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Cancel" />
                            </ListItem>
                        </List>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList);