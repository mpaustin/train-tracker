import React from 'react'
import { connect } from 'react-redux'
import Table from './Table';
import Login from './Login';
import AddWorkout from './AddWorkout';
import { Box, TableCell, Button, CircularProgress } from '@material-ui/core';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import LoginButton from './LoginButton';

export const Content = (props) => {

    const { user, workouts, loading } = props;

    let columnTitles = [
        <TableCell style={{ color: 'white'}}>Date</TableCell>,
        <TableCell style={{ color: 'white'}} align="left">Type</TableCell>,
        <TableCell style={{ color: 'white'}} align="left">Description</TableCell>,
        <TableCell style={{ color: 'white'}} align="left">Sauna?</TableCell>,
        <TableCell style={{ color: 'white'}} align="left">Meditation?</TableCell>,
    ];

    let rows = [];
    if (workouts) {
        workouts.forEach(workout => {
            let row = [
                <TableCell>{workout.wdate}</TableCell>,
                <TableCell align="left">{workout.type}</TableCell>,
                <TableCell align="left">{workout.description}</TableCell>,
                <TableCell align="left">{workout.sauna ? 'Yes' : 'No'}</TableCell>,
                <TableCell align="left">{workout.meditation ? 'Yes' : 'No'}</TableCell>,
            ]
            rows.push(row);
        });
    }

    return (
        <div>
            <Box height='100%' width='100%' display='flex' flexDirection='column' justifyContent='center'>
                <Switch>
                    <Route 
                        exact
                        path={'/'}
                    >
                        <Redirect to={'/login'}/>
                    </Route>
                    <Route
                        path={'/login'}
                    >
                        <Box height='100%' margin='30px 0 30px' >
                            <LoginButton/>
                        </Box>
                    </Route>
                    <Route
                        path={'/workouts'}
                    >
                        <Box height='100%' margin='30px 0 30px' >
                            {
                                <>
                                    <AddWorkout/>
                                    <h4>
                                        {user}'s Workouts 
                                    </h4>
                                    {
                                        loading ?
                                        <CircularProgress color='inherit'/>
                                        :
                                        <Table 
                                            columnTitles={columnTitles}
                                            rows={rows}
                                        />
                                    }
                                </>
                            }
                        </Box>
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
        loading: state.workouts.loading,
    }
};

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
