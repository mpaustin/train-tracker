import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { logIn } from '../redux/actions/users';

export const Login = (props) => {

    const [open, setOpen] = React.useState(true);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { logIn } = props;

    const handleSubmit = () => {
        console.log('Attempting to log in...')
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
            <Box>
                <TextField
                    autofocus
                    id='username'
                    label='Username'
                    type='text'
                    fullwidth
                    // onChange={}
                /> 
            </Box>
            <Box>
                <TextField
                    id='password'
                    label='Password'
                    type='password'
                    fullwidth
                    // onChange={}
                /> 
            </Box>
            <Box>
                <Button onClick={handleSubmit} color='primary' >Submit</Button>
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
