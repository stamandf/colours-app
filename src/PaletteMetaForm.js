import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class PaletteMetaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            newPaletteName: ""
          };
    }
    componentDidMount() {
         ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    handleClickOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    
    };
    
    render() {
        const { newPaletteName } = this.props;
        return (
            <Dialog
              open={this.state.open}
              onClose={this.props.hideForm}    
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
              <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)} ref='form'>
              <DialogContent>
                <DialogContentText>
                  Please enter the name of your new Palette below.
                </DialogContentText>
                        <TextValidator 
                            label="Palette Name"
                            name="newPaletteName" 
                            value={newPaletteName} 
                            onChange={this.props.handleChange} 
                            fullWidth
                            margin="normal"
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter Palette Name", "Palette Name already in use!"]}
                            />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.props.hideForm} color="primary">
                    Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                    Save
                </Button>
              </DialogActions>
              </ValidatorForm>
            </Dialog>
        );
      }
}
export default PaletteMetaForm;