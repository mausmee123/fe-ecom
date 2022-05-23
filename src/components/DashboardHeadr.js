import React, {useState} from 'react';
import {Container, makeStyles, SvgIcon, Typography, Grid} from '@material-ui/core';
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import Button from "@material-ui/core/Button";

const theme = createTheme({
    palette: {
        primary: {
            main: "#007FFF",
        },
        secondary: {
            main: "#00D037",
        },
        error: {
            main: "#C32525",
        },
    }
});

const useStyle = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
        // gap: '1em',
        // alignItems: 'center',
        // border: '1px solid blue',
    },
    logo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '4px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px'
        }
    },
    icon: {
        fontSize: 50,
        [theme.breakpoints.down('sm')]: {
            fontSize: 35
        }
    },
    name: {
        marginTop: '10px',
        marginLeft: '12px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px'
        }
    },
    titleWrapper: {
        color: '#656565',
        textAlign: 'center',
        marginTop: '10px',
        padding: '0px 120px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px'
        }
    },
    title: {
        fontSize: '35px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px'
        }
    },
    companyName: {
        color: '#007FFF'
    },
    navigationButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: '20px',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('md')]: {
            marginTop: '20px'
        }
    },
    button: {
        height: '40px',
        width: '85%',
        marginLeft: '5%'
        // [theme.breakpoints.down("md")]: {
        //   width: '120px'
        // },
    },
    color: {
        fontSize: '15px',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            fontSize: '13px'
        }
    }
}));

export default function DashboardHeader() {
    const [activeButton, setActiveButton] = useState('publish');
    const [name, setName] = useState('Bvm Infotech');
    const classes = useStyle();
    const handleClick = (e, button) => {
        setActiveButton(button);
    };

    return (

        <Grid container className={classes.wrapper}>
            <Grid item xs={4} md={2} className={classes.logo}>
                <SvgIcon className={classes.icon}>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </SvgIcon>
                <Typography className={classes.name} variant="h4">
                    Name
                </Typography>
            </Grid>

            <Grid item xs={8} md={6} className={classes.titleWrapper}>
                <Typography variant="h4" className={classes.title}>
                    welcome <span className={classes.companyName}> {name}</span> to your
                    dashboard{' '}
                </Typography>
            </Grid>

            <Grid item xs={12} md={4} className={classes.navigationButton}>
                <Grid xs={4}>
                    <Button
                        className={classes.button}
                        classes={{label: classes.color}}
                        onClick={(e) => handleClick(e, 'publish')}
                        variant="contained"
                        color={activeButton === 'publish' ? 'primary' : 'secondary'}
                        disableElevation
                    >
                        Publish
                    </Button>
                </Grid>
                <Grid xs={4}>
                    <Button
                        className={classes.button}
                        classes={{label: classes.color}}
                        onClick={(e) => handleClick(e, 'statistics')}
                        variant="contained"
                        color={activeButton === 'statistics' ? 'primary' : 'secondary'}
                        disableElevation
                    >
                        Statistics
                    </Button>
                </Grid>
                <Grid xs={4}>
                    <Button
                        className={classes.button}
                        classes={{label: classes.color}}
                        onClick={(e) => handleClick(e, 'account')}
                        variant="contained"
                        color={activeButton === 'account' ? 'primary' : 'secondary'}
                        disableElevation
                    >
                        Account
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
