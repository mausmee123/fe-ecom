import React from 'react';
import './statistics.scss'
import {DataGrid} from '@mui/x-data-grid';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';

const handleClick = (param, event) => {
    event.stopPropagation();
};

const StyledDataGrid = styled(DataGrid)(({theme}) => ({
    border: 0,
    color:
        true ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: true ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${
            true ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${
            true ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-cell': {
        color:
            true ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
    },
}));


const useStyles = makeStyles({
    table: {
        width: "80%",
        margin: "0 auto",
        borderRadius: "10px",
        height: 400,
        overflow: 'auto',
        "@media only screen and (max-width: 1200px)": {
            width: '90%'
        },
        "@media only screen and (max-width: 959px)": {
            width: '100%'
        }
    },
    container: {
        padding: "50px",
        "@media only screen and (max-width: 1200px)": {
            padding: "30px",
        },
        "@media only screen and (max-width: 520px)": {
            padding: "15px",
        },
    },
    table2: {
        marginTop: "50px",
    },
    outline: {
        border: "1px solid rgba(224, 224, 224, 1)",
        padding: "10px"
    }
});

const columns = [
    {
        field: 'id',
        headerName: 'id',
        width: 90
    },
    {
        field: 'Country',
        headerName: 'Country',
        width: 150,
        editable: true,
    },
    {
        field: 'Category',
        headerName: 'Category',
        width: 150,
        editable: true,
    },
    {
        field: 'Subscription',
        headerName: 'Subscription',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'Status',
        headerName: 'Status',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
    {
        field: "Modify",
        renderCell: (cellValues) => {
            return (
                <Button
                    variant="contained"
                    color="primary"
                >
                    Edit
                </Button>
            );
        }
    }
];

const rows = [
    {id: 1, Country: 'Snow', Category: 'Jon', Subscription: 35, Status: 35},
    {id: 2, Country: 'Lannister', Category: 'Cersei', Subscription: 42, Status: 35},
    {id: 3, Country: 'Lannister', Category: 'Jaime', Subscription: 45, Status: 35},
    {id: 4, Country: 'Stark', Category: 'Arya', Subscription: 16, Status: 35},
    {id: 5, Country: 'Targaryen', Category: 'Daenerys', Subscription: null, Status: 35},
    {id: 6, Country: 'Melisandre', Category: null, Subscription: 150, Status: 35},
    {id: 7, Country: 'Clifford', Category: 'Ferrara', Subscription: 44, Status: 35},
    {id: 8, Country: 'Frances', Category: 'Rossini', Subscription: 36, Status: 35},
    {id: 9, Country: 'Roxie', Category: 'Harvey', Subscription: 65, Status: 35},
];


const Statistics = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} className="table-grid">
                <Grid item xs={12} md={6} className={classes.table2}>
                    <div className={classes.table}>
                        <Typography className="bg-blue heading-title" align="left">
                            new subscriptions past 30 days
                        </Typography>
                        <div style={{height: 400, width: '100%'}}>
                            <StyledDataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            />
                        </div>
                        {/*<DataGrid*/}
                        {/*    rows={rows}*/}
                        {/*    columns={columns}*/}
                        {/*    pageSize={5}*/}
                        {/*    rowsPerPageOptions={[5]}*/}
                        {/*    HorizontalGridLinesBrush="#00D037"*/}
                        {/*    VerticalGridLinesBrush="Red"*/}
                        {/*/>*/}
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.table2}>
                    <div className={classes.table}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.table2}>
                    <div className={classes.table}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.table2}>
                    <div className={classes.table}>
                        {/* <Notifications isAdmin/>*/}
                    </div>
                </Grid>
            </Grid>


            {/*<Grid direction="column" container*/}
            {/*      className="table-grid">*/}
            {/*    <Grid item xs={12} md={6} className={classes.table2}>*/}
            {/*        <TableContainer className={classes.table}>*/}
            {/*            <Typography variant={'h5'} className="bg-blue heading-title" align="left">*/}
            {/*                new subscriptions past 30 days*/}
            {/*            </Typography>*/}
            {/*            <Table sx={{height: "max-content", tableLayout: "auto",}} aria-label="simple table"*/}
            {/*                   className={classes.outline}>*/}
            {/*                <TableHead>*/}
            {/*                    <TableRow aria-label="simple table">*/}
            {/*                        <TableCell className="font border-blue">Company</TableCell>*/}
            {/*                        <TableCell className="font border-blue" align="center">Country</TableCell>*/}
            {/*                        <TableCell className="font border-blue" align="center">Category</TableCell>*/}
            {/*                        <TableCell className="font border-blue" align="center">Subscription Date</TableCell>*/}
            {/*                        <TableCell className="font border-blue" align="center">Status</TableCell>*/}
            {/*                        <TableCell className="font border-blue" align="center">Modify</TableCell>*/}
            {/*                    </TableRow>*/}
            {/*                </TableHead>*/}
            {/*                <TableBody>*/}
            {/*                    {rows.map((row) => (*/}
            {/*                        <TableRow key={row.name}>*/}
            {/*                            <TableCell className="border-blue" component="th"*/}
            {/*                                       scope="row">{row.name}</TableCell>*/}
            {/*                            <TableCell className="border-blue" align="center">{row.calories}</TableCell>*/}
            {/*                            <TableCell className="border-blue" align="center">{row.fat}</TableCell>*/}
            {/*                            <TableCell className="border-blue" align="center">{row.carbs}</TableCell>*/}
            {/*                            <TableCell className="border-blue" align="center">{row.protein}</TableCell>*/}
            {/*                            <TableCell className="border-blue" align="center">{<Button className="btn"*/}
            {/*                                                                                       color="primary"*/}
            {/*                                                                                       variant="contained">Edit</Button>}</TableCell>*/}
            {/*                        </TableRow>*/}
            {/*                    ))}*/}
            {/*                </TableBody>*/}
            {/*            </Table>*/}
            {/*        </TableContainer>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={12} md={6} className={classes.table2}>*/}
            {/*        <TableContainer className={classes.table}>*/}
            {/*            <Typography variant={'h5'} className="bg-green heading-title" align="left">*/}
            {/*                Total Subscription List*/}
            {/*            </Typography>*/}
            {/*            <Table aria-label="simple table" className={classes.outline}>*/}
            {/*                <TableHead>*/}
            {/*                    <TableRow aria-label="simple table">*/}
            {/*                        <TableCell className="font border-green">Company</TableCell>*/}
            {/*                        <TableCell className="font border-green" align="center">Country</TableCell>*/}
            {/*                        <TableCell className="font border-green" align="center">Category</TableCell>*/}
            {/*                        <TableCell className="font border-green" align="center">Subscription*/}
            {/*                            Date</TableCell>*/}
            {/*                        <TableCell className="font border-green" align="center">Status</TableCell>*/}
            {/*                        <TableCell className="font border-green" align="center">Modify</TableCell>*/}
            {/*                    </TableRow>*/}
            {/*                </TableHead>*/}
            {/*                <TableBody>*/}
            {/*                    {rows.map((row) => (*/}
            {/*                        <TableRow key={row.name}>*/}
            {/*                            <TableCell className="border-green" component="th" scope="row">*/}
            {/*                                {row.name}*/}
            {/*                            </TableCell>*/}
            {/*                            <TableCell className="border-green" align="center">{row.calories}</TableCell>*/}
            {/*                            <TableCell className="border-green" align="center">{row.fat}</TableCell>*/}
            {/*                            <TableCell className="border-green" align="center">{row.carbs}</TableCell>*/}
            {/*                            <TableCell className="border-green" align="center">{row.protein}</TableCell>*/}
            {/*                            <TableCell className="border-green" align="center"> <Button className="btn"*/}
            {/*                                                                                        variant="contained"*/}
            {/*                                                                                        color="secondary">Edit</Button></TableCell>*/}
            {/*                        </TableRow>*/}
            {/*                    ))}*/}
            {/*                </TableBody>*/}
            {/*            </Table>*/}
            {/*        </TableContainer>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </>
    );

};

export default Statistics;
