import React from "react";
import {useNavigate, useLocation, Outlet} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/material/styles';
import InputSharpIcon from '@material-ui/icons/InputSharp';
import useTheme from "@mui/material/styles/useTheme";
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DrawerComponent from "../DrawerComponent";
import '../../pages/Style.scss'
import {makeStyles, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import Logo from "../../assets/Logo.svg";
import MobileLogo from "../../assets/mobile-logo.svg";


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
        [theme.breakpoints.down('lg')]: {
            fontSize: '13px',
        }
    },
    navButtons: {
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems: 'center',
        width: "-webkit-fill-available",
    },
    navBtn: {
        marginRight: "5px",
        backgroundColor: 'none',
    },
    margin: {
        marginTop: "10px"
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

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '9',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    padding: theme.spacing(0.5, 0.5, 0.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px'
}));

const PageHeader = () => {
    const navigate = useNavigate();
    const classes = useStyle();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            <Box className="header-top">
                <div className="header-left">
                    <div className="main-title">
                        <img src={Logo} alt="React Logo" className={classes.Logo}/>
                        <img src={ MobileLogo} alt="React MobileLogo"  className={classes.MobileLogo} />
                    </div>

                    <div className="search-bar">
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            className="search-input"
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                </div>
                <div className="header-right">
                    <div className="icon-right">
                        <InputSharpIcon color="secondary"/>
                    </div>

                    {isMobile ? (
                        <DrawerComponent/>
                    ) : (
                        <div>
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
                        </div>
                    )}
                </div>
                <Outlet/>
            </Box>
        </div>
    )
}
export default PageHeader;