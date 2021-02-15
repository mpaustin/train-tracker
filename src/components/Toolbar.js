import React from 'react'
import { connect } from 'react-redux'
import Toolbar from '@material-ui/core/Toolbar';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { logOut } from '../redux/actions/users';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

export const ToolBar = (props) => {
    const { user, logOut } = props;
    const { isAuthenticated } = useAuth0();
    return (
        <div>
            <Toolbar>
                <Box width='100%' display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Box>
                        <h2>
                           Train Tracker 
                        </h2>
                    </Box>
                    {isAuthenticated ?
                    <Box>
                        <LogoutButton/>
                    </Box>
                    :
                    <Box/>
                    }
                </Box>
            </Toolbar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user,
    };
}

const mapDispatchToProps = {
    logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)
