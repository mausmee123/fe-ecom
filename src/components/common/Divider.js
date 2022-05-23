import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    divider: {
        float: 'left',
        width: '100vw',
        marginTop: '30px',
        marginBottom: '10px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '10px'
        }
    },
    dividerGreen: {
        backgroundColor: '#00D037',
        height: '4px',
        width: '17%',
        float: 'left',
        marginRight: '5%',
        marginLeft: '8%',
        border: '0px'
    },
    dividerBlue: {
        backgroundColor: '#007FFF',
        height: '4px',
        width: '17%',
        float: 'left',
        marginRight: '5%',
        border: '0px'
    },

    dividerYellow: {
        backgroundColor: '#FCB900',
        height: '4px',
        width: '17%',
        float: 'left',
        marginRight: '5%',
        border: '0px'
    },
    dividerRed: {
        backgroundColor: '#DD1C1A',
        height: '4px',
        width: '17%',
        marginRight: '8%',
        border: '0px'
    }
}));
export default function Dividers() {
    const classes = useStyle();
    return (
        <div className={classes.divider}>
            <Divider className={classes.dividerGreen} />
            <Divider className={classes.dividerBlue} />
            <Divider className={classes.dividerYellow} />
            <Divider className={classes.dividerRed} />
        </div>
    );
}
