import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import Pictures from './Pictures';
// import DashboardHeader from '../../../components/dashboard/DashboardHeadr';
import ImageUpload from './ImageUpload';
import Footer from './Footer';

//custom theme for color
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

//custom style

const useStyle = makeStyles((theme) => ({
    picture: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px'
        }
    },
    upload: {
        float: 'left',
        marginTop: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '68%',
            marginTop: '0px'
        }
    },
    input: {
        width: '100%',
        float: 'left',
        [theme.breakpoints.down('sm')]: {
            width: '70%'
        }
    }
}));

export default function Publish() {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            {/*<DashboardHeader />*/}
            <div className={classes.picture}>
                <Pictures />
            </div>
            <div className={classes.upload}>
                <ImageUpload />
            </div>
            <div className={classes.input}>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
