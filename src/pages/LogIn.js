import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, Container, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import Header from '../components/common/Header';
import Dividers from '../components/common/Divider';
import IconButton from '@material-ui/core/IconButton';
import CustomTextField from '../components/common/InputField';

const theme = createTheme({
    palette: {
        primary: {
            main: "#007FFF",
        },
        secondary: {
            main: "#00D037",
        },
    }
});

const useStyle = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw',
        [theme.breakpoints.down('sm')]: {
            // height: 'auto',
            // marginTop: "40px",
            // overflow: 'hidden'
        }
    },
    title: {
        fontSize: '30px',
        color: '#007FFF',
        marginTop: '10px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '30px',
            fontSize: '20px'
        }
    },
    signUp: {
        borderRadius: '10px',
        height: '60px',
        width: '400px',
        marginTop: '20px',
        [theme.breakpoints.down('xs')]: {
            width: '75%',
            height: '50px',
            marginTop: '15px',
            marginBottom: '25px',
            marginLeft: '12.5%',
            marginRight: '12.5%',
            fontSize: '13px'
        }
    },
    userLogIn: {
        fontSize: '30px',
        color: '#11cb5f',
        marginTop: '10px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px'
        }
    },
    form: {
        width: '400px',
        marginTop: '15px',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    emailInputFilledBorder: {
        border: '0.5px solid #656565',
        marginRight: '0px',
        marginBottom: '40px',
        borderRadius: '10px',
        paddingTop: '13px',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: '75%',
            paddingTop: '8px',
            margin: '0px 12.5% 40px 12.5%',
            height: '38px'
        }
    },
    passwordInputFilledBorder: {
        border: '0.5px solid #656565',
        marginRight: '0px',
        marginBottom: '15px',
        borderRadius: '10px',
        paddingTop: '13px',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: '75%',
            paddingTop: '8px',
            margin: '0px 12.5% 10px 12.5%',
            height: '38px'
        }
    },
    inputFilled: {
        borderRadius: '10px',
        height: '60px',
        width: '400px',
        boxSizing: 'borderBox',
        marginTop: '20px',
        marginBottom: '25px',
        [theme.breakpoints.down('xs')]: {
            width: '75%',
            height: '50px',
            margin: '10px 12.5% 10px 12.5%'
        }
    },
    textFieldStyleGreen: {
        color: '#11cb5f',
        fontSize: 18,
        [theme.breakpoints.down('xs')]: {
            fontSize: 13
        }
    },
    checkbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            width: '75%',
            paddingTop: '6px',
            margin: '0px 12.5% 10px 12.5%'
        }
    },
    label: {
        fontSize: 20,
        color: '#656565',
        [theme.breakpoints.down('xs')]: {
            fontSize: 15
        }
    },
    logIn: {
        borderRadius: '10px',
        height: '60px',
        marginTop: '10px',
        width: '400px',
        [theme.breakpoints.down('xs')]: {
            width: '75%',
            height: '50px',
            marginTop: '20px',
            marginLeft: '12.5%',
            marginRight: '12.5%',
            fontSize: '13px'
        }
    }
}));

export default function LogIn() {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.wrapper}>
                <Header />
                <div className={classes.title}>For new users</div>
                <Button
                    className={classes.signUp}
                    variant="outlined"
                    color="primary"
                    startIcon={
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <ExitToAppIcon />
                        </IconButton>
                    }
                >
                    Sign Up here!
                </Button>

                <Dividers />
                <div className={classes.userLogIn}>User Log in </div>
                <div className={classes.form}>
                    {/*<div className={classes.emailInputFilledBorder}>*/}
                    <CustomTextField
                        styles={classes.inputFilled}
                        color="secondary"
                        name={'business_name'}
                        InputLabelProps={{ classes: { root: classes.textFieldStyleGreen } }}
                        disableUnderline={false}
                        id="outlined-basic"
                        label="Email or Aggrement Number"
                        variant="filled"
                        required={true}
                    />
                    {/*</div>*/}
                    {/*<div className={classes.passwordInputFilledBorder}>*/}
                    <CustomTextField
                        styles={classes.inputFilled}
                        color="secondary"
                        name={'business_name'}
                        InputLabelProps={{ classes: { root: classes.textFieldStyleGreen } }}
                        disableUnderline={false}
                        id="outlined-basic"
                        label="Password"
                        variant="filled"
                        required={true}
                    />
                    {/*</div>*/}
                    <div className={classes.checkbox}>
                        <FormControlLabel
                            classes={{
                                label: classes.label
                            }}
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Remember Me"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            classes={{
                                label: classes.label
                            }}
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="Forgot Password"
                            labelPlacement="start"
                        />
                    </div>
                </div>
                <Button
                    className={classes.logIn}
                    variant="outlined"
                    color="primary"
                    startIcon={
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <ExitToAppIcon />
                        </IconButton>
                    }
                >
                    Sign Up here!
                </Button>
            </Container>
        </ThemeProvider>
    );
}
