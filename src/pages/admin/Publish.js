import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProductPreference from "../../components/ProductPreference";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles((theme) => ({
    first: {
        width: '45%',
        margin: '50px auto',
        maxWidth: 'unset',
        flexBasis: 'unset',
        padding: '0 50px !important',
        [theme.breakpoints.down('sm')]: {
            width: '99%'
        }
    },
    second: {
        width: '45%',
        margin: '50px auto',
        maxWidth: 'unset',
        flexBasis: 'unset',
        padding: '0 50px !important',
        [theme.breakpoints.down('sm')]: {
            width: '99%'
        }
    }
}));

const Publish = () => {
    const classes = useStyle();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6} className={classes.first}>
                    <div>xs=6</div>
                </Grid>
                <Grid item xs={6} className={classes.second}>
                   <ProductPreference />
                </Grid>
            </Grid>
        </>
    );
};

export default Publish;
