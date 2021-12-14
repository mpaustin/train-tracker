import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField,
    FormControl, FormControlLabel, RadioGroup, FormHelperText, Radio, FormLabel, Snackbar, Checkbox,
    Box, } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { getWorkouts } from '../redux/actions/workouts';
import SyncIcon from '@material-ui/icons/Sync';
import AddIcon from '@material-ui/icons/Add';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles({
    wType: {
        marginTop: '20px',
    },
    wDesc: {
        marginBottom: '20px',
    },
    addButton: {
        marginRight:'5px',
    },
    refreshButton: {
        marginLeft: '5px',
    }
});

export const AddWorkout = (props) => {

    const { 
        // user, 
        getWorkouts } = props;
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [wDate, setWDate] = React.useState(() => {
            const date = new Date();
            let month = '' + (date.getMonth() + 1);
            let day = '' + date.getDate();
            const year = '' + date.getFullYear();

            if (month.length < 2) {
                month = '0' + month;
            }
            if (day.length < 2) {
                day = '0' + day;
            }

            return [year, month, day].join('-');
        }
    );
    // const [wDate, setWDate] = React.useState(new Date().toISOString().split('T')[0]);
    const [wType, setWType] = React.useState('');
    const [wDesc, setWDesc] = React.useState('');
    const [meditation, setMeditation] = React.useState(false);
    const [sauna, setSauna] = React.useState(false);

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const types = [
        'Weights',
        'Functional Fitness',
        'Basketball',
        'Hockey',
        'Run',
        'Rowing',
        'Walk',
        'Tennis',
        'Sauna',
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

        if (isAuthenticated && user && user.name) {

            const addNewWorkout = async () => {
                const token = await getAccessTokenSilently({
                    audience: "api.traintracker.com",
                    scope: "read:workouts"
                })
    
                addWorkout({
                    user: user.name,
                    date: wDate,
                    type: wType,
                    description: wDesc,
                    meditation: meditation,
                    sauna: sauna,
                    token: token,
                });
            }

            addNewWorkout();
        }
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

    const addWorkout = ({
        user,
        date,
        type,
        description,
        sauna,
        meditation,
        token,
    }) => {
        axios.post(process.env.API_URL + '/workouts/new', {
            user,
            date,
            type,
            description,
            sauna,
            meditation,
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setSuccess(true);
            setSnackbarOpen(true);
            getWorkouts(user, token);
        }).catch(err => {
            setSuccess(false);
            setSnackbarOpen(true);
            console.log('ERROR', err);
        });
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarOpen(false);
    };

    const handleChange = (field) => (event) => {
        switch (field) {
            case 'meditation':
                setMeditation(event.target.checked);
                break;
            case 'sauna':
                setSauna(event.target.checked);
                break;
        };
    }

    const handleRefresh = () => {

        if (isAuthenticated && user && user.name) {

            const refresh = async () => {
                const token = await getAccessTokenSilently({
                    audience: "api.traintracker.com",
                    scope: "read:workouts"
                })
    
                getWorkouts(user.name, token);
            }

            refresh();
        }
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
                        className={classes.wDesc}
                    />
                    <div/>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="inherit" onChange={handleChange('sauna')}/>}
                        label="Sauna"
                        labelPlacement="end"
                    />
                    <div/>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="inherit" onChange={handleChange('meditation')}/>}
                        label="Meditation"
                        labelPlacement="end"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color='inherit' >Cancel</Button>
                    <Button onClick={handleSubmit} color='inherit' >Submit</Button>
                </DialogActions>
            </Dialog>
            <Box>
                <Button onClick={openDialog} variant='outlined' startIcon={<AddIcon/>} className={classes.addButton}>
                    Log Workout
                </Button>
                <Button onClick={handleRefresh} variant='outlined' startIcon={<SyncIcon/>} className={classes.refreshButton}>
                    Refresh
                </Button>
            </Box>
            <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleClose} 
                anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'top'
                }}
            >
                {success ?
                <Alert severity='success' variant='filled'>Workout successfully added</Alert>
                :
                <Alert severity='error' variant='filled'>ERROR: Workout NOT added</Alert>    
                }
            </Snackbar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,
        user: state.users.user,
    }
};

const mapDispatchToProps = {
    getWorkouts,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkout)
