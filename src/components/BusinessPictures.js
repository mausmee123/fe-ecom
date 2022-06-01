import React, { useState } from 'react';
import { createTheme, Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";

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


//custom style for classes

const useStyle = makeStyles((theme) => ({
    uploadImageText: {
        display: 'flex',
        justifyContent: 'center',
        height: '150px',
        width: '100%',
        alignItems: 'center'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        marginTop: '5px',
        overflowY: 'auto',
        [theme.breakpoints.down('xs')]: {
            height: '300px',
        },
    },
    images: {
        height: '400px'
    },
    grid: {
        position: 'relative',
        paddingLeft: '9px',
        paddingRight: '9px',
    },
    item: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
            height: 'auto'
        },
    },
    closes: {
        position: 'absolute',
        right: '15px',
        zIndex: '100',
        padding: '4px 3px',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '28px',
        lineHeight: '10px',
        borderRadius: '50%',
        '&:hover': {
            backgroundColor: 'rgb(0 0 0 / 60%)'
        },
        [theme.breakpoints.down('sm')]: {
            right: '5px'
        }
    }
}));

const itemData = [
    {
        img: 'https://v4.mui.com/static/images/image-list/breakfast.jpg',
        id: '1'
    },
    {
        img: 'https://v4.mui.com/static/images/image-list/burgers.jpg',
        id: '2'
    },
    {
        img: 'https://v4.mui.com/static/images/image-list/camera.jpg',
        id: '3'
    },
    {
        img: 'https://v4.mui.com/static/images/image-list/morning.jpg',
        id: '4'
    },
    {
        img: 'https://v4.mui.com/static/images/image-list/honey.jpg',
        id: '5'
    },
    {
        img: 'https://v4.mui.com/static/images/image-list/vegetables.jpg',
        id: '6'
    },
    {
        img: 'https://v4.mui.com/static/images/image-list/vegetables.jpg',
        id: '7'
    },
    {
        img: 'https://v4.mui.com/static/images/image-list/morning.jpg',
        id: '8'
    }
];

export default function BusinessPictures() {
    const classes = useStyle();

    const [image, setImage] = useState(itemData);

    const handleDelete = (e, index) => {
        image.splice(index, 1);
        setImage([...image]);
    };

    return (
        <ThemeProvider theme={theme}>
            {image.length == 0 ? (
                <div className={classes.uploadImageText}>Upload image</div>
            ) : (
                <Grid container className={classes.wrapper}>
                    {image.map((img, index) => (
                        <Grid key={index} className={classes.grid} item xs={12}>
                            <img className={classes.item} src={img.img} />
                            <IconButton
                                onClick={(e) => handleDelete(e, index)}
                                className={classes.closes}
                                title="Delete"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    ))}
                </Grid>
            )}
        </ThemeProvider>
    );
}
