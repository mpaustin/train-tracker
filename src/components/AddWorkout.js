import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField,
    FormControl, FormControlLabel, RadioGroup, FormHelperText, Radio, FormLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wType: {
        marginTop: '20px',
    }
});

export const AddWorkout = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [wDate, setWDate] = React.useState(new Date());
    const [wType, setWType] = React.useState('');
    const [wDesc, setWDesc] = React.useState('');
    const [meditation, setMeditation] = React.useState(false);
    const [sauna, setSauna] = React.useState(false);

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
        console.log('date', wDate);
        console.log('type', wType);
        console.log('desc', wDesc);
        console.log('meditation', meditation);
        console.log('sauna', sauna);

        // TODO: add workout action here
    };

    const buildWorkoutTypes = () => {
        let radioTypes = [];
        types.forEach(type => {
            radioTypes.push(
                <FormControlLabel
                    value={type}
                    control={<Radio color="inherit" />}
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
                        type='date'
                        color='inherit'
                        value={wDate}
                        onChange={(e) => {setWDate(e.target.value)}}
                        fullWidth
                    />
                    <FormControl component="fieldset" className='radio-button-section' className={classes.wType}>
                        <FormLabel component="legend" color='inherit'>Type</FormLabel>
                        <RadioGroup name="Type" value={wType} onChange={(e) => {setWType(e.target.value)}}>
                            {buildWorkoutTypes()}
                        </RadioGroup>
                        <FormHelperText></FormHelperText>
                    </FormControl>
                    <div/>
                    <TextField
                        id='description'
                        label='Description'
                        type='text'
                        color='inherit'
                        value={wDesc}
                        onChange={(e) => {setWDesc(e.target.value)}}
                        fullWidth
                    />
                </DialogContent>

                {/* TODO: add meditation toggle */}
                {/* TODO: add sauna toggle */}

                <DialogActions>
                    <Button onClick={closeDialog} color='inherit' >Cancel</Button>
                    <Button onClick={handleSubmit} color='inherit' >Submit</Button>
                </DialogActions>
            </Dialog>
            <Button onClick={openDialog} variant='outlined'>
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
