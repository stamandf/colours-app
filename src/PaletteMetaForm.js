import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class PaletteMetaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: "form",
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
    
    showEmojiPicker = () => {
      this.setState( { stage: "emoji" })
    };

    savePalette = (emoji) => {
      const newPalette = { 
        paletteName: this.props.newPaletteName,
        emoji: emoji.native
      };
      this.props.handleSubmit(newPalette);
      
    };
    render() {
        const { hideForm, newPaletteName } = this.props;
        return (
          <div>
          <Dialog open={this.state.stage === "emoji"} onClose={hideForm}>
            <DialogTitle id="form-dialog-title">Pick a Palette Emoji</DialogTitle>
             <Picker title="Pick a Palette Emoji" onSelect={this.savePalette}/>
          </Dialog>
            <Dialog
              open={this.state.stage === "form"}
              onClose={hideForm}    
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
              <ValidatorForm onSubmit={this.showEmojiPicker} ref='form'>
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
            </div>
        );
      }
}
export default PaletteMetaForm;