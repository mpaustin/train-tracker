import React from 'react'
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'underscore';

const useStyles = makeStyles({
    tableContainer: {
        alignSelf: 'center'
    },
    table: {
        maxWidth: 750,
        margin: '0 auto 30px',
        alignSelf: 'center',
        border: '2px solid black',
        boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
    },
    tableHead: {
        backgroundColor: 'black',
    },
});

export default function DenseTable(props) {
    const classes = useStyles();

    return (

        <TableContainer className={classes.tableContainer}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        {props.columnTitles}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRow hover key={row.i}>
                            {row}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}
