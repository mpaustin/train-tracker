import React from 'react'
import { connect } from 'react-redux'
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     toolbar: {
//         backgroundColor: '#808080',
        
//     }
// });

export const ToolBar = () => {
    return (
        <div>
            <Toolbar>
                <Box width='100%' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                    <Box>
                        <h2>
                           Train Tracker 
                        </h2>
                    </Box>
                    <Box>
                        Login
                    </Box>
                </Box>
            </Toolbar>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar)
