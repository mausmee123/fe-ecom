import React from 'react';
import { Button, Typography, makeStyles, Divider } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyle = makeStyles((theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw'
    },
    logoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#007FFF',
        padding: '0px',
        height: '40px'
    },
    logoText: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingRight: '20px',
        marginLeft: '20px'
    },
    heading: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px'
        }
    },
    slogan: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px'
        }
    }
}));
export default function Header() {
    const classes = useStyle();
    return (
        <div className={classes.header}>
            <div className={classes.logoWrapper}>
                <Button variant="contained" className={classes.button}>
                    <ArrowBackIcon />
                </Button>
                <div className={classes.logoText}>
                    <Typography variant="h3" className={classes.heading}>
                        Logo Name
                    </Typography>
                    <Typography variant="h5" className={classes.slogan}>
                        Placeholder slogan text
                    </Typography>
                </div>
            </div>
        </div>
    );
}
