import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import logo from "../../assets/admin-logo.png"
import {Button, makeStyles} from "@material-ui/core";
import {useNavigate, useLocation, Outlet} from "react-router-dom"
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
    },
    wrapperNav: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    companyName: {
        color: '#007FFF'
    },
    title: {
        color: '#656565',
        textAlign: 'center'
    },
    color: {
        fontSize: '15px',
        color: '#fff',
    },
    navButtons: {
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems: 'center',
        width: "-webkit-fill-available",
    },
    navBtn: {
        marginRight: "5px"
    },
    margin: {
        marginTop: "10px"
    }
}));

const AdminHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const classes = useStyle();

    return (
        <>
            <Container maxWidth="xl" className={classes.margin}>
                <Box style={{height: '100vh', flexGrow: 1}}>
                    {/*<Grid container spacing={{xs: 2, md: 3}} columns={{xs: 12, sm: 8, md: 12}}>*/}
                    {/*    <Grid item xs={12} sm={12} md={3}>*/}
                    {/*        <img src={logo}/>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item xs={12} sm={12} md={3}>*/}
                    {/*        <Typography variant="h4" className={classes.title} gutterBottom component="div">*/}
                    {/*            Welcome to <span className={classes.companyName}> {'Admin'}</span> Dashboard*/}
                    {/*        </Typography>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item xs={12} sm={12} md={6}>*/}
                    {/*        {*/}
                    {/*            [{label: "Publish", path: "/", pathname: "/admin"}, {*/}
                    {/*                label: "Statistics",*/}
                    {/*                path: "statistics",*/}
                    {/*                pathname: "/admin/statistics"*/}
                    {/*            }, {label: "Account", path: "account", pathname: "/admin/account"}].map((btn, i) => {*/}
                    {/*                return (*/}
                    {/*                    <Button*/}
                    {/*                        className={classes.navBtn}*/}
                    {/*                        key={i}*/}
                    {/*                        onClick={() => navigate(btn.path)}*/}
                    {/*                        variant="contained"*/}
                    {/*                        classes={{label: classes.color}}*/}
                    {/*                        color={location.pathname === btn.pathname ? 'primary' : 'secondary'}*/}
                    {/*                        disableElevation*/}
                    {/*                    >*/}
                    {/*                        {btn.label}*/}
                    {/*                    </Button>*/}
                    {/*                )*/}
                    {/*            })*/}
                    {/*        }*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} className={classes.wrapper}>
                            <div>
                                <img src={logo}/>
                            </div>
                            <Typography variant="h4" className={classes.title} component="div">
                                Welcome to <span className={classes.companyName}> {'Admin'}</span> Dashboard
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.wrapperNav}>
                            <div className={classes.navButtons}>
                                {
                                    [{label: "Publish", path: "/admin", pathname: "/admin"}, {
                                        label: "Statistics",
                                        path: "statistics",
                                        pathname: "/admin/statistics"
                                    }, {
                                        label: "Account",
                                        path: "account",
                                        pathname: "/admin/account"
                                    }].map((btn, i) => {
                                        return (
                                            <Button
                                                key={i}
                                                onClick={() => navigate(btn.path)}
                                                variant="contained"
                                                className={classes.navBtn}
                                                classes={{label: classes.color}}
                                                color={location.pathname === btn.pathname ? 'primary' : 'secondary'}
                                                disableElevation
                                            >
                                                {btn.label}
                                            </Button>
                                        )
                                    })
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <Outlet/>
            </Container>
        </>
    );
};

export default AdminHeader;
