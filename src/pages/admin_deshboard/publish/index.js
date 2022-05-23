import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    first: {
        float: 'left',
        width: '49%',
        height: '200px',
        border: '1px solid red',
        [theme.breakpoints.down('sm')]: {
            // float: 'left',
            width: '99%'
        }
    },
    second: {
        float: 'right',
        width: '49%',
        height: '200px',
        border: '1px solid blue',
        [theme.breakpoints.down('sm')]: {
            width: '99%'
            // float:'right'
        }
    }
}));
export default function Publish() {
    const classes = useStyle();
    return (
        <>
            <div className={classes.second}>
                <h1>second</h1>
            </div>
            <div className={classes.first}>
                <h1>first</h1>
            </div>
        </>
    );
}
