import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { logIn } from '../redux/actions/users';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    loginFields: {
        margin: '1rem',
    }
});

export const Login = (props) => {

    const [open, setOpen] = React.useState(true);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { logIn } = props;
    const classes = useStyles();

    const handleSubmit = () => {
        logIn({
            username,
            password,
        });
    }

    return (
        <Box>
            <Box>
              Please log in to continue.  
            </Box>
            <Box className={classes.loginFields}>
                <TextField
                    autofocus
                    id='username'
                    label='Username'
                    type='text'
                    fullwidth
                    // onChange={}
                /> 
            </Box>
            <Box className={classes.loginFields}>
                <TextField
                    id='password'
                    label='Password'
                    type='password'
                    fullwidth
                    // onChange={}
                /> 
            </Box>
            <Box>
                <Button onClick={handleSubmit} color='inherit' variant='outlined' >Submit</Button>
            </Box>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    logIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
