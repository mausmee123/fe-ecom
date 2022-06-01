import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProductPreference from "../../components/ProductPreference";
import Grid from "@material-ui/core/Grid";
import BusinessPreference from "../../components/BusinessPreference";

const useStyle = makeStyles((theme) => ({
    first: {
        width: '50%',
        margin: '50px auto 70px',
        maxWidth: 'unset',
        flexBasis: 'unset',
        padding: '0 50px !important',
        [theme.breakpoints.down('lg')]: {
            padding: '0 15px !important',
        },
        [theme.breakpoints.down('sm')]: {
            width: '99%'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '50px auto 0',
        }
    },
    second: {
        width: '50%',
        margin: '50px auto',
        maxWidth: 'unset',
        flexBasis: 'unset',
        padding: '0 50px !important',
        [theme.breakpoints.down('sm')]: {
            width: '99%'
        },
        [theme.breakpoints.down('lg')]: {
            padding: '0 15px !important',
        },
    }
}));

const Publish = () => {
    const classes = useStyle();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={6} sm={12} xs={12} className={classes.first}>
                   <BusinessPreference/>
                </Grid>
                <Grid item md={6} sm={12} xs={12} className={classes.second}>
                   <ProductPreference />
                </Grid>
            </Grid>
        </>
    );
};

export default Publish;
