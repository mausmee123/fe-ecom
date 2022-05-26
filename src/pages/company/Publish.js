import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import {createTheme, makeStyles} from "@material-ui/core";
import ImageUpload from "../../components/ImageUpload";
import Pictures from "../../components/Pictures";


//custom theme for color
const theme = createTheme({
    palette: {
        primary: {
            main: '#007FFF'
        },
        secondary: {
            main: '#11cb5f'
        }
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


const Publish = () => {
    const classes = useStyle();
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={classes.picture}>
                    <Pictures />
                </div>
                <div className={classes.upload}>
                    <ImageUpload />
                </div>
            </ThemeProvider>

        </>
    );
};

export default Publish;
