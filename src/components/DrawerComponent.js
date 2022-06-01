import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@material-ui/core/IconButton";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import {makeStyles} from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import {useNavigate} from "react-router-dom"

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
        fontSize: '18px',
        textTransform: 'capitalize',
        fontWeight: '500',
    },
    navButtons: {
        justifyContent: "space-evenly",
        alignItems: 'center',
        width: "-webkit-fill-available",
        backgroundColor: '#007FFF',
    },
    navBtn: {
        marginRight: "5px",
        color: "#fff",
    },
    margin: {
        marginTop: "10px"
    }
}));
function DrawerComponent() {
    const navigate = useNavigate();
    const classes = useStyle();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className="bg-blue d-icon">
                <MenuIcon className="h-icon"/>
            </IconButton>
            <Popper
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                className="drop-down bg-blue"
            >
                <Paper>
                    <div className={classes.navButtons}>
                        {
                            [{  label: "About-us",
                                path: "/pages/about-us",
                                pathname: "/pages/about-us",
                                icon: <SupervisedUserCircleSharpIcon/>
                            },
                                {
                                    label: "Pricing-Subscription",
                                    path: "pricing-Subscription",
                                    pathname: "/pages/pricing-Subscription",
                                    icon: <DescriptionIcon/>
                                }, {
                                label: "Contact-us",
                                path: "contact-us",
                                pathname: "/pages/contact-us",
                                icon: <EmailIcon/>
                            }].map((btn, i) => {
                                return (
                                    <Button
                                        key={i}
                                        onClick={() => navigate(btn.path)}
                                        className={classes.navBtn}
                                        classes={{label: classes.color}}
                                        color={location.pathname === btn.pathname ? 'secondary' : 'primary'}
                                        startIcon={btn.icon}
                                        disableElevation
                                    >
                                        {btn.label}
                                    </Button>
                                )
                            })
                        }
                    </div>
                        </Paper>
            </Popper>
        </>
    );
}
export default DrawerComponent;