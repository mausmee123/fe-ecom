import React from 'react';
import "../pages/admin/Publish.scss"
import {
    createTheme,
    makeStyles,
    Grid,
    Typography,
    TextField,
} from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import FilterByCategory from "./FilterByCategory";
import FilterByCountry from "./FilterByCountry";
import FilterByCompany from "./FilterByCompany";
import BusinessImageUpload from "./BusinessImageUplolad";

const theme = createTheme({
    palette: {
        primary: {
            main: "#007FFF",
        },
        secondary: {
            main: "#00D037",
        },
    },
});


const useStyle = makeStyles((theme) => ({
    productCategories: {
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '15px',
    },
    productCategoriesTitle: {
        backgroundColor: '#007FFF',
        height: '50px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: '22px',
        fontStyle: 'normal',
        color: '#fff',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px'
        }
    },
    inputFieldWrapper: {
        padding: '0 8px'
    },
    inputFieldTitle: {
        fontStyle: 'normal',
        fontSize: '14px',
        margin: '10px 0',
        color: '#656565',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            margin: '10px 0',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px'
        }
    },
    input: {
        display:'grid',
    },
    inputField: {
        width: '90%',
        height: '20px',
        [theme.breakpoints.down('sm')]: {
            height: '0px'
        }
    },
    filterType:{
        padding: "15px",
    }
}));

const BusinessPreference = () => {
    const classes = useStyle();
    return(
        <>
            <ThemeProvider theme={theme}>
            <Grid container style={{ width: '100%' }} className="BusinessPreference">
                <Grid container className={classes.productCategories} item xs={12} spacing={2}>
                    <Grid className={classes.productCategoriesTitle} item xs={12}>
                        <Typography className={classes.header}>
                            Create/Delete Business Account Preferences
                        </Typography>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                        />
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                        />
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                        />
                    </Grid>


                    <Grid item xs={12} className={classes.filterType}>
                            <Grid container spacing={2}>
                                <Grid item lg={4} md={6} sm={6} xs={12}>
                                    <FilterByCountry isAdmin/>
                                </Grid>
                                <Grid item lg={4} md={6} sm={6} xs={12}>
                                    <FilterByCategory isAdmin/>
                                </Grid>
                                <Grid item lg={4} md={6} sm={6} xs={12}>
                                    <FilterByCompany isAdmin/>
                                </Grid>
                            </Grid>
                    </Grid>


                    <Grid item xs={12} className={classes.filterType}>
                       <BusinessImageUpload/>
                    </Grid>

                </Grid>
                </Grid>
        </ThemeProvider>
        </>
    )
}

export default BusinessPreference;