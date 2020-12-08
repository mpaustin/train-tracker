import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from './Table';
import { Box, TableCell } from '@material-ui/core';

export const content = () => {

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

    return (
        <div>
            <Box height='100%' width='100%' display='flex' flexDirection='column' justifyContent='center'>
                Your Workouts
                <Table 
                    columnTitles={columnTitles}
                    rows={rows}
                />
            </Box>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(content)
