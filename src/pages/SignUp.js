import React, { useState } from 'react';
import CustomTextField from '../components/common/InputField';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {
    Typography,
    makeStyles,
    Container,
    Button,
    Checkbox,
    Link,
    Grid,
    Select,
    FormControl
} from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Header from '../components/common/Header';
import Dividers from '../components/common/Divider';
import InputLabel from '@material-ui/core/InputLabel';

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
        width: '100%',
        marginTop: '40px',
        marginBottom: '40px',
        [theme.breakpoints.down('xs')]: {
            height: '100%',
            marginTop: '10px'
        }
    },
    formTitle: {
        color: '#007FFF',
        margin: '0px',
        fontWeight: '400',
        width: 'auto',
        fontSize: '30px',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '23px'
        }
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    inputFilledBorder: {
        border: '0.5px solid #656565',
        marginRight: '0px',
        marginBottom: '10px',
        borderRadius: '10px',
        paddingTop: '13px',
        width: '400px',
        [theme.breakpoints.down('xs')]: {
            width: '75%',
            paddingTop: '6px',
            margin: '0px 12.5% 10px 12.5%',
            height: '38px'
        }
    },
    inputFilled: {
        borderRadius: '10px',
        height: '60px',
        width: '400px',
        boxSizing: 'borderBox',
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            width: '75%',
            height: '50px',
            marginLeft: '12.5%',
            marginRight: '12.5%'
        }
    },
    checkboxField: {
        borderRadius: '10px',
        // height: "60px",
        width: '400px',
        boxSizing: 'borderBox',
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '50px'
        }
    },
    noBorder: {
        border: 'none'
    },
    termCondition: {
        display: 'flex',
        flexDirection: 'row'
    },

    checkBox: {
        padding: '0px',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '12.5%'
        }
    },
    labelText: {
        fontWeight: '400',
        color: '#656565',
        margin: '0px 0px 0px 10px',
        fontSize: '14px',
        width: '373px',
        [theme.breakpoints.down('xs')]: {
            width: '65%',
            fontSize: '12px',
            margin: '0px 0px 0px 4%'
        }
    },
    links: {
        marginLeft: '43px',
        width: '350px',
        [theme.breakpoints.down('xs')]: {
            width: '74%',
            fontSize: 11,
            margin: '0px 0px 0px 26%'
        }
    },
    saveButton: {
        width: '400px',
        marginTop: '10px',
        borderRadius: '10px',
        height: '50px',
        fontSize: '16px',
        fontWeight: '400',
        backgroundColor: '#007FFF',
        [theme.breakpoints.down('xs')]: {
            width: '50%',
            margin: '0px 25%',
            marginBottom: '20px',
            fontSize: '14px'
        }
    },
    textFieldStyleBlue: {
        color: '#007FFF',
        fontSize: 18,
        [theme.breakpoints.down('xs')]: {
            fontSize: 11
        }
    },
    textFieldStyleGreen: {
        color: '#11cb5f',
        fontSize: 18,
        [theme.breakpoints.down('xs')]: {
            fontSize: 11
        }
    },
    root1: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff'
        },
        '&$focused': {
            backgroundColor: '#fff',
            // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main
        }
    }
}));

const currencies = [
    {
        value: 'USD',
        label: '$'
    },
    {
        value: 'EUR',
        label: '€'
    },
    {
        value: 'BTC',
        label: '฿'
    },
    {
        value: 'JPY',
        label: '¥'
    }
];

export default function SignUp() {
    const classes = useStyle();
    const [data, setData] = useState({});
    const [currency, setCurrency] = useState('');
    console.log('data', data);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.wrapper}>
                <Header />
                <Dividers />

                <Grid className={classes.form}>
                    <Typography className={classes.formTitle} variant="subtitle1">
                        New Account Business Details
                    </Typography>
                    {/*<div className={classes.inputFilledBorder}>*/}
                    <CustomTextField
                        styles={classes.inputFilled}
                        color="primary"
                        name={'business_name'}
                        InputLabelProps={{ classes: { root: classes.textFieldStyleBlue } }}
                        disableUnderline={false}
                        id="outlined-basic"
                        label="Legal Name of Business"
                        variant="filled"
                        handlechange={(e) => handleChange(e)}
                        required={true}
                    />
                    {/*</div>*/}
                    {/*<div className={classes.inputFilledBorder}>*/}
                    <CustomTextField
                        styles={classes.inputFilled}
                        color="secondary"
                        name={'url'}
                        InputLabelProps={{ classes: { root: classes.textFieldStyleGreen } }}
                        disableUnderline={false}
                        id="outlined-basic"
                        label="Insert webshop URI or homepage address"
                        variant="filled"
                        handlechange={(e) => handleChange(e)}
                        required
                    />
                    {/*</div>*/}
                    {/*<div className={classes.inputFilledBorder}>*/}
                    <CustomTextField
                        styles={classes.inputFilled}
                        color="primary"
                        name={'number_Of_employes'}
                        InputLabelProps={{ classes: { root: classes.textFieldStyleBlue } }}
                        disableUnderline={false}
                        id="outlined-basic"
                        label="Number of employees in your company"
                        variant="filled"
                        handlechange={(e) => handleChange(e)}
                        required
                    />
                    {/*</div>*/}
                    {/*<div className={classes.inputFilledBorder}>*/}
                    <CustomTextField
                        styles={classes.inputFilled}
                        color="secondary"
                        name={'email'}
                        InputLabelProps={{ classes: { root: classes.textFieldStyleGreen } }}
                        disableUnderline={false}
                        id="outlined-basic"
                        label="Account Email"
                        variant="filled"
                        handlechange={(e) => handleChange(e)}
                        required
                    />
                    {/*</div>*/}
                    {/*<div className={classes.inputFilledBorder}>*/}
                    {/*  <TextField*/}
                    {/*    className={classes.checkboxField}*/}
                    {/*    id="standard-select-currency"*/}
                    {/*    select*/}
                    {/*    name={"country"}*/}
                    {/*    color='primary'*/}
                    {/*    variant="filled"*/}
                    {/*    label="Country"*/}
                    {/*    value={currency}*/}
                    {/*    // handlechange={(e) => handleChange(e)}*/}
                    {/*    // InputProps={{classes: {notchedOutline: classes.noBorder,root: classes.root}}}*/}
                    {/*    InputProps={{ disableUnderline: true }}*/}
                    {/*    classes={{root: classes.root1}}*/}
                    {/*    InputLabelProps={{classes: {root: classes.textFieldStyleBlue}}}*/}
                    {/*    required*/}
                    {/*  >*/}
                    {/*    {currencies.map((option) => (*/}
                    {/*      <MenuItem key={option.value} value={option.value}>*/}
                    {/*        {option.label}*/}
                    {/*      </MenuItem>*/}
                    {/*    ))}*/}
                    {/*  </TextField>*/}
                    <FormControl variant="filled" className={classes.inputFilled}>
                        <InputLabel
                            htmlFor="filled-age-native-simple"
                            classes={{ root: classes.textFieldStyleBlue }}
                        >
                            Age
                        </InputLabel>
                        <Select
                            native
                            // value={state.age}
                            // onChange={handleChange}
                            color="primary"
                            inputProps={{
                                name: 'age',
                                id: 'filled-age-native-simple',
                                disableUnderline: true
                            }}
                            classes={{ root: classes.root1 }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                    {/*</div>*/}
                    {/*<div className={classes.inputFilledBorder}>*/}
                    <CustomTextField
                        styles={classes.inputFilled}
                        color="secondary"
                        name={'password'}
                        InputLabelProps={{ classes: { root: classes.textFieldStyleGreen } }}
                        disableUnderline={false}
                        id="outlined-basic"
                        label="Paasword"
                        variant="filled"
                        handlechange={(e) => handleChange(e)}
                        required
                    />
                    {/*</div>*/}
                    {/*<div className={classes.inputFilledBorder}>*/}
                    <CustomTextField
                        styles={classes.inputFilled}
                        color="primary"
                        name={'confirm_password'}
                        InputLabelProps={{ classes: { root: classes.textFieldStyleBlue } }}
                        disableUnderline={false}
                        id="outlined-basic"
                        label="Repeat Password"
                        variant="filled"
                        handlechange={(e) => handleChange(e)}
                        required
                    />
                    {/*</div>*/}
                    <div className={classes.termCondition}>
                        <Checkbox
                            className={classes.checkBox}
                            icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" color="primary" />}
                        />
                        <div className={classes.labelText}>
                            Creating an account means you’re okay with our Terms of Service, Privacy
                            Policy, and our default Notification Settings.
                        </div>
                    </div>
                    <div className={classes.links}>
                        <Link href="#">Link to Read Terms of Service</Link>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '10px',
                            alignItems: 'center'
                        }}
                    >
                        <Checkbox
                            className={classes.checkBox}
                            icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" color="primary" />}
                        />
                        <div className={classes.labelText}>Remember Me</div>
                    </div>
                    <Button variant="contained" className={classes.saveButton}>
                        Save & Next
                    </Button>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
