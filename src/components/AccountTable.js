import React from 'react';
import '../pages/admin/Account.scss'
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DataTable from "./common/DataTable";
import GeneralNotification from "./GeneralNotification";

const handleClick = (param, event) => {
    event.stopPropagation();
};
const useStyles = makeStyles({
    table: {
        width: "80%",
        margin: "0 auto",
        borderRadius: "10px",
        overflow: 'auto',
        position: 'relative',
        border: "1px solid #e5e5e5",
        "@media only screen and (max-width: 1600px)": {
            width: '90%',
            height: '400'
        },
        "@media only screen and (max-width: 1199px)": {
            width: '95%'
        },
        "@media only screen and (max-width: 959px)": {
            width: '76%'
        },
        "@media only screen and (max-width: 740px)": {
            width: '100%'
        }
    },
    container: {
        padding: "50px",
        "@media only screen and (max-width: 1500px)": {
            padding: "15px 0 50px 0",
        },
    },
    table2: {
        marginTop: "30px",
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
        width: 70,
    },
    {
        field: 'Country',
        headerName: 'Country',
        width: 120,
        editable: true,
    },
    {
        field: 'Category',
        headerName: 'Category',
        width: 160,
        editable: true,
    },
    {
        field: 'Subscription',
        headerName: 'Subscription',
        width: 120,
        editable: true,
    },
    {
        field: 'Status',
        headerName: 'Status',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 120,
    },
    {
        field: "Modify",
        renderCell: (cellValues) => {
            return (
                <Button
                    className="table-btn"
                    variant="contained"
                    color="primary"
                    onClick={(event) => {
                        handleClick(event, cellValues);
                    }}>
                    Edit
                </Button>
            );
        }
    }
];
const columns2 = [
    {
        field: 'id',
        headerName: 'id',
        width: 70,
    },
    {
        field: 'Country',
        headerName: 'Country',
        width: 120,
        editable: true,
    },
    {
        field: 'Category',
        headerName: 'Category',
        width: 160,
        editable: true,
    },
    {
        field: 'Subscription',
        headerName: 'Subscription',
        width: 120,
        editable: true,
    },
    {
        field: 'Status',
        headerName: 'Status',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 120,
    },
    {
        field: "Modify",
        renderCell: (cellValues) => {
            return (
                <Button
                    className="table-btn"
                    variant="contained"
                    color="secondary"
                    onClick={(event) => {
                        handleClick(event, cellValues);
                    }}>
                    Edit
                </Button>
            );
        }
    }
];
const columns3 = [
    {
        field: 'id',
        headerName: 'id',
        width: 70,
    },
    {
        field: 'Country',
        headerName: 'Country',
        width: 120,
        editable: true,
    },
    {
        field: 'Category',
        headerName: 'Category',
        width: 160,
        editable: true,
    },
    {
        field: 'Subscription',
        headerName: 'Subscription',
        width: 120,
        editable: true,
    },
    {
        field: 'Status',
        headerName: 'Status',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 120,
    },
    {
        field: "Modify",
        renderCell: (cellValues) => {
            return (
                <Button
                    className="table-btn1"
                    variant="contained"
                    onClick={(event) => {
                        handleClick(event, cellValues);
                    }}
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

const options = {
    fixedHeader: true,
};

const Account = () => {
    const classes = useStyles();
    return (
        <>
                <Grid container rowSpacing={1} className="table-grid" columnSpacing={{xs: 1, sm: 2, md: 3}} >
                    <Grid item xs={12} md={6} className={classes.table2}>
                        <div className={classes.table}>
                            <Typography className="bg-blue heading-title" align="left">
                                new subscriptions past 30 days
                                <div className="btn-group">
                                    <Button variant="contained" color="primary" className="btn">Export-exel</Button>
                                </div>
                            </Typography>
                            <div className="table-data">
                            <DataTable
                                rows={rows}
                                columns={columns}
                                borderColor={"#007FFF"}
                                options={options}
                            >
                            </DataTable>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.table2}>
                        <div className={classes.table}>
                            <Typography className="bg-green heading-title" align="left">
                                new subscriptions past 30 days
                                <div className="btn-group">
                                    <Button variant="contained" color="primary" className="btn">Export-exel</Button>
                                </div>
                            </Typography>
                            <div className="table-data">
                            <DataTable
                                rows={rows}
                                columns={columns2}
                                borderColor={"#00D037"}
                            >
                            </DataTable>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.table2}>
                        <div className={classes.table}>
                            <Typography className="bg-red heading-title" align="left">
                                new subscriptions past 30 days
                                <div className="btn-group">
                                    <Button variant="contained" color="primary" className="btn">Export-exel</Button>
                                </div>
                            </Typography>
                            <div className="table-data">
                            <DataTable
                                rows={rows}
                                columns={columns3}
                                borderColor={"#C32525"}
                            >
                            </DataTable>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.table2}>
                        <div className={classes.table}>
                            <GeneralNotification isAdmin/>
                        </div>
                    </Grid>
                </Grid>
        </>
    );

};

export default Account;
