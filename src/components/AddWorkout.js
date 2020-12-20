import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField,
    FormControl, FormControlLabel, RadioGroup, FormHelperText, Radio, FormLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dialogSizing: {
        minWidth: '1000px'
    }
});

export const AddWorkout = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [wDate, setWDate] = React.useState(Date.now());
    const [wType, setWType] = React.useState('');
    const [wDesc, setWDesc] = React.useState('');
    const [meditation, setMeditation] = React.useState(false);

    const types = [
        'Weights',
        'Functional Fitness',
        'Rowing',
        'Run',
        'Hockey',
        'Basketball',
    ]

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
    };

    const buildWorkoutTypes = () => {
        let radioTypes = [];
        types.forEach(type => {
            radioTypes.push(
                <FormControlLabel
                    value={type}
                    control={<Radio color="primary" />}
                    label={type}
                    labelPlacement="start"
                />
            )
        })
        return radioTypes;
    }

    return (
        <div>
            <Dialog open={open} onClose={closeDialog} className={classes.dialogSizing}>
                <DialogTitle>Log Workout</DialogTitle>
                <DialogContent>
                    <TextField
                        id='date'
                        label='Date'
                        type='date'
                        fullWidth
                    />
                    <FormControl component="fieldset" className='radio-button-section'>
                        <FormLabel component="legend">Type</FormLabel>
                        <RadioGroup name="Type" value={wType} onChange={(e) => {}}>
                            {buildWorkoutTypes()}
                        </RadioGroup>
                        <FormHelperText></FormHelperText>
                    </FormControl>
                    <div/>
                    <TextField
                        id='description'
                        label='Description'
                        type='text'
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color='primary' >Cancel</Button>
                    <Button onClick={handleSubmit} color='primary' >Submit</Button>
                </DialogActions>
            </Dialog>
            <Button onClick={openDialog}>
                Log New Workout
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkout)
