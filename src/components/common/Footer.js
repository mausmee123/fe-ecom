import React from 'react';
import {makeStyles} from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
    footerWrapper: {
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "#656565",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '40px',
        textAlign: 'center',
        fontSize: 'small',
        paddingBottom: '3px',
        zIndex: '99'
    }
}));

const Footer = () => {
    const classes = useStyle();
    return (
        <div
            className={classes.footerWrapper}
        >
            &copy; Copyright {new Date().getFullYear()} | Company name | All rights reserved.
        </div>
    );
};

export default Footer;
