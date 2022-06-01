import React from 'react';
import { Button, Typography, makeStyles, Divider } from '@material-ui/core';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import Logo from "../../assets/Logo.svg"
import MobileLogo from "../../assets/mobile-logo.svg";


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
        marginLeft: '20px',
        textAlign: 'center'
    },
    heading: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px'
        }
    },
    slogan: {
        color: '#656565',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px'
        }
    },
    MobileLogo: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        }
    },
   Logo: {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }
}));
export default function Header() {
    const classes = useStyle();
    return (
        <div className={classes.header}>
            <div className={classes.logoWrapper}>
                    <AssignmentReturnIcon color="primary" style={{fontSize: "50px"}}/>
                <div className={classes.logoText}>
                    <Typography variant="h3" className={classes.heading}>
                        <img src={Logo} alt="React Logo" className={classes.Logo}/>
                        <img src={ MobileLogo} alt="React MobileLogo"  className={classes.MobileLogo} />
                    </Typography>
                    <Typography variant="h5" className={classes.slogan}>
                        Placeholder slogan text
                    </Typography>
                </div>
            </div>
        </div>
    );
}
