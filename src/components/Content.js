import React from 'react'
import { connect } from 'react-redux'
import Table from './Table';
import Login from './Login';
import AddWorkout from './AddWorkout';
import { Box, TableCell, Button } from '@material-ui/core';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

export const Content = (props) => {

    const [open, setOpen] = React.useState(false);

    const { user, workouts } = props;

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

    const handleOpen = () => {
        setOpen(true);
    };

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
                        <Box height='90vh' margin='30px 0 30px' >
                            {
                                user ?
                                <>
                                    <AddWorkout/>
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
