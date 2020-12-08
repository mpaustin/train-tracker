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
        margin: '30px auto 30px',
        alignSelf: 'center',
        border: '2px solid black',
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
