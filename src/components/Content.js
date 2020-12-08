import React from 'react'
import { connect } from 'react-redux'
import Table from './Table';
import Login from './Login';
import { Box, TableCell, Button } from '@material-ui/core';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

export const Content = (props) => {

    const [open, setOpen] = React.useState(false);

    const { user, workouts } = props;

    let columnTitles = [
        <TableCell style={{ color: 'white'}}>Date</TableCell>,
        <TableCell style={{ color: 'white'}} align="left">Workout</TableCell>,
        <TableCell style={{ color: 'white'}} align="left">Rating</TableCell>,
    ];

    let rows = [
        [
            <TableCell>12/7/20</TableCell>,
            <TableCell align="left">Weights</TableCell>,
            <TableCell align="left">5.0</TableCell>,
        ],
        [
            <TableCell>12/5/20</TableCell>,
            <TableCell align="left">Rowing</TableCell>,
            <TableCell align="left">4.5</TableCell>,
        ],
        [
            <TableCell>12/4/20</TableCell>,
            <TableCell align="left">Run</TableCell>,
            <TableCell align="left">4.0</TableCell>,
        ],
    ]

    const handleOpen = () => {
        setOpen(true);
    };

    console.log('Content user', user);

    return (
        <div>
            <Box height='100%' width='100%' display='flex' flexDirection='column' justifyContent='center'>
                <Switch>
                    <Route 
                        exact
                        path={'/'}
                    >
                        <Redirect to={'/home'}/>
                    </Route>
                    <Route
                        path={'/home'}
                    >
                        <Box height='90vh' margin='30px 25% 30px' >
                            {
                                user ?
                                <>
                                    <h4>
                                        {user}'s Workouts 
                                    </h4>
                                    <Table 
                                        columnTitles={columnTitles}
                                        rows={rows}
                                    />
                                </>
                                :
                                <Login/>
                            }
                        </Box>
                    </Route>
                    <Route
                        path={'/login'}
                    >
                        
                    </Route>
                </Switch>
            </Box>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,
        user: state.users.user,
        workouts: state.workouts.workouts,
    }
};

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
