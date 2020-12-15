import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { logIn } from '../redux/actions/users';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    loginFields: {
        margin: '1rem',
    },
    loginFailed: {
        color: 'red',
    }
});

export const Login = (props) => {

    const [open, setOpen] = React.useState(true);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { logIn, loginFailed } = props;
    const classes = useStyles();

    useEffect(() => {
        console.log('username', username);
        console.log('password', password);
    });

    const handleSubmit = () => {
        logIn({
            username,
            password,
        });
    }

    const disableSubmit = () => {
        let disabled = true;
        if (username && password) {
            disabled = false;
        };
        return disabled;
    }

    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <Box>
            <Box>
              Please log in to continue.  
            </Box>
            {
                loginFailed ?
                <Box className={classes.loginFailed}>
                    Incorrect username or password
                </Box> 
                : null 
            }
            <Box className={classes.loginFields}>
                <TextField
                    autofocus
                    id='username'
                    label='Username'
                    type='text'
                    fullwidth
                    onChange={(e) => updateUsername(e)}
                /> 
            </Box>
            <Box className={classes.loginFields}>
                <TextField
                    id='password'
                    label='Password'
                    type='password'
                    fullwidth
                    onChange={(e) => updatePassword(e)}
                /> 
            </Box>
            <Box>
                <Button onClick={handleSubmit} disabled={disableSubmit()} color='inherit' variant='outlined' >Submit</Button>
            </Box>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    loginFailed: state.users.loginFailed,
})

const mapDispatchToProps = {
    logIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
