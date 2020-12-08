import React from 'react'
import { connect } from 'react-redux'
import Toolbar from '@material-ui/core/Toolbar';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { logOut } from '../redux/actions/users';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     toolbar: {
//         backgroundColor: '#808080',
        
//     }
// });

export const ToolBar = (props) => {
    const { user, logOut } = props;
    return (
        <div>
            <Toolbar>
                <Box width='100%' display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Box>
                        <h2>
                           Train Tracker 
                        </h2>
                    </Box>
                    {user ?
                    <Box>
                        <Button onClick={() => logOut()} >
                            Log Out
                        </Button>
                    </Box>
                    :
                    <Box>
                        <Link to='/home'>
                            Log In
                        </Link>
                    </Box>
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
