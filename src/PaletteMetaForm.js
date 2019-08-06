import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
            open: false,
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

    handleChange = (e) => {
        this.setState( { [e.target.name]: e.target.value })
      }

    handleClickOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    };
    
    render() {
        const { newPaletteName } = this.state;
        return (
          <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Save Palette
            </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}    
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter the name of your new Palette below.
                </DialogContentText>
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
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleClose} color="primary">
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
}
export default PaletteMetaForm;