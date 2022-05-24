import React from 'react';
import './Account.scss'
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FilterType from "../../components/FilterType";
import Button from "@material-ui/core/Button";
import AccountTable from "../../components/AccountTable";
import AdminDashboard from "../../components/AdminDashboard";

const useStyles = makeStyles({
    container: {
        padding: "50px",
        "@media only screen and (max-width: 1500px)": {
            padding: "15px 0 50px 0",
        },
    }
});

const Account = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
            <Grid container spacing={1} className="filter">
                <Grid item xs={12} lg={6}>
                    <FilterType/>
                </Grid>
                <Grid item xs={12} lg={6} align="left" className="filter-btn">
                    <Button variant="contained" color="primary" className="addUser btn">Refresh</Button>
                </Grid>
            </Grid>

                <AdminDashboard/>
            <AccountTable/>
            </div>

        </>
    );

};

export default Account;
