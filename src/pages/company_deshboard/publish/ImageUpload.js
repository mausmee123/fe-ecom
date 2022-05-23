import React, { useState } from 'react';
import {
    Button,
    createTheme,
    Grid,
    makeStyles,
    TextField,
    ThemeProvider,
    Typography
} from '@material-ui/core';
import Select, { components } from 'react-select';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//custom theme for color

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

//custom style

const useStyle = makeStyles((them) => ({
    main: {
        paddingLeft: '10px'
    },
    firstGrid: {
        border: '1px solid #656565',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    uploadImage: {
        borderBottom: '1px solid #656565',
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px'
    },
    svgIcon: {
        width: '100px',
        height: '120px',
        [theme.breakpoints.down('xs')]: {
            width: '63px',
            height: '90px'
        }
    },
    uploadButton: {
        width: '210px',
        height: '60px',
        marginTop: '12px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '40px'
        }
    },
    dragTitle: {
        marginTop: '12px',
        fontSize: '21px',
        color: '#656565',
        fontWeight: '500',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        [theme.breakpoints.down('xs')]: {
            fontSize: '17px',
            marginTop: '7px'
        }
    },
    logoPlaceHolder: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '20%',
        paddingLeft: '20px',
        paddingRight: '20px',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '10px',
            paddingRight: '10px'
        }
    },
    logoImage: {
        width: '80%',
        height: '50px',
        [theme.breakpoints.down('xs')]: {
            height: '35px'
        }
    },
    personIcon: {
        width: '55px',
        height: '50px',
        [theme.breakpoints.down('xs')]: {
            width: '25px',
            height: '25px'
        }
    },

    // textField  style

    secondInfo: {
        paddingLeft: '10px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0px'
        }
    },
    label: {
        width: '540px',
        marginTop: '12px',
        fontSize: '23px',
        color: '#656565',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            fontSize: '11px'
        }
    },
    urlTextfield: {
        width: '90%',
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginBottom: '0'
        }
    },
    input: {
        height: '50px',
        paddingLeft: '10px',
        [theme.breakpoints.down('xs')]: {
            height: '30px',
            borderRadius: '4px'
        }
    },
    inputLabel: {
        color: '#656565',
        padding: '0px'
    },
    buttonTextColor: {
        color: '#fff'
    },
    placeholder: {
        color: '#a2a2a2'
    }
}));

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

// customStyle for select input field

const customStyles = {
    multiValue: (provided, state) => ({
        ...provided,
        backgroundColor: '#007FFF',
        // padding: '4px',
        alignItems: 'flex-start'
    }),
    multiValueLabel: (provided, state) => ({
        ...provided,
        color: '#fff',
        fontSize: '17px'
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        color: '#fff',
        '&:hover': {
            backgroundColor: '#007fff',
            color: '#fff'
        }
    }),
    container: (provider, state) => ({
        ...provider,
        width: '90%',
        marginBottom: '20px',

        '@media only screen and (max-width: 600px)': {
            ...provider['@media only screen and (max-width: 600px)'],
            width: '100%',
            marginBottom: '0'
        }
    }),
    dropdownIndicator: (provider, state) => ({
        ...provider,
        '@media only screen and (max-width: 600px)': {
            ...provider['@media only screen and (max-width: 600px)'],
            padding: 0
        }
    })
};

// custom icon for select input field

const CaretDownIcon = () => {
    return <ArrowDropDownIcon fontSize="large" />;
};
const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <CaretDownIcon />
        </components.DropdownIndicator>
    );
};

export default function ImageUpload() {
    const classes = useStyle();
    const [image, setImage] = useState();
    const [logoImage, setLogoImage] = useState('');

    const handleFileChange = (e) => {
        const [file] = e.target.files;
        setImage([...image, { img: URL.createObjectURL(file) }]);
        console.log('image', image);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container className={classes.main}>
                <Grid container item xs={12} md={7} className={classes.firstGrid}>
                    <Grid item className={classes.uploadImage}>
                        <svg
                            className={classes.svgIcon}
                            viewBox="0 0 118 97"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M81.0902 59.5723L58.8565 34.957L36.625 59.5723L41.1368 64.5701L55.6642 48.4829V96.4246H62.049V48.485L76.5745 64.5659L81.0902 59.5723Z"
                                fill="#656565"
                            />
                            <path
                                d="M92.9325 24.0291C91.8754 24.0291 90.8086 24.1055 89.7458 24.2581C84.3453 15.5051 74.5117 10.7959 64.9058 12.7529C60.3824 4.96036 52.5673 0.1875 44.143 0.1875C31.4061 0.1875 20.9309 10.7915 19.5923 24.6588C8.24 27.3539 0.171875 38.3078 0.171875 51.38C0.171875 66.4623 11.2542 78.7306 24.8738 78.7306H49.5433V71.7206H24.8738C14.7433 71.7206 6.50085 62.5946 6.50085 51.3776C6.50085 40.9307 13.5694 32.2348 22.9396 31.1515L25.7719 30.4412V27.5342C25.7719 16.3174 34.0122 7.19353 44.1428 7.19353C51.0847 7.19353 57.3565 11.4661 60.5144 18.3446L61.6999 20.9314L64.2162 20.1236C72.5372 17.454 81.3406 21.6778 85.4062 29.8073L86.5514 32.0932L88.8591 31.5313C90.2092 31.2005 91.5745 31.033 92.9247 31.033C103.013 31.033 111.217 40.159 111.217 51.3737C111.217 62.5905 102.975 71.7167 92.8441 71.7167H68.0062V78.7267H92.8462C106.466 78.7267 117.548 66.4582 117.548 51.3761C117.548 36.2997 106.506 24.0291 92.9325 24.0291Z"
                                fill="#656565"
                            />
                        </svg>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="contained-button-file"
                            onChange={(e) => handleFileChange(e)}
                        />
                        <label htmlFor="contained-button-file">
                            <Button
                                variant="contained"
                                classes={{ containedPrimary: classes.uploadButton }}
                                color="primary"
                                component="span"
                            >
                                Upload Image
                            </Button>
                        </label>
                        <Typography className={classes.dragTitle}>
                            or drag and drop image here
                        </Typography>
                    </Grid>
                    <Grid item className={classes.logoPlaceHolder}>
                        <img className={classes.logoImage} src={logoImage} name="logo" />
                        <svg
                            className={classes.personIcon}
                            viewBox="0 0 55 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.59375 26.2707V33.3664C0.59375 34.4765 1.51662 35.3766 2.65516 35.3766H9.34212V27.7338C9.34212 25.0746 10.0041 22.5651 11.1697 20.3466C8.75095 20.2066 6.56651 19.2082 4.93043 17.6602C2.29325 19.6515 0.59375 22.7666 0.59375 26.2707Z"
                                fill="#007FFF"
                            />
                            <path
                                d="M16.3205 14.52C15.2751 12.8462 14.6728 10.8822 14.6728 8.78354C14.6728 7.50547 14.8988 6.2787 15.3096 5.13583C14.2749 4.51718 13.0581 4.16016 11.7555 4.16016C7.99441 4.16016 4.94531 7.13323 4.94531 10.8012C4.94531 14.469 7.99441 17.4425 11.7555 17.4425C12.2735 17.4425 12.7772 17.3842 13.2622 17.2772C14.1592 16.2389 15.1871 15.3128 16.3205 14.52Z"
                                fill="#007FFF"
                            />
                            <path
                                d="M34.8125 27.9991C35.9165 27.9991 36.9968 28.2383 37.9803 28.6849L39.6772 27.4745C39.5908 23.0489 37.2957 19.1527 33.8197 16.7891C31.7841 18.6774 29.0344 19.8402 26.01 19.8402C22.9855 19.8402 20.2359 18.6774 18.2001 16.7893C14.6566 19.1987 12.3359 23.2001 12.3359 27.7324V36.4243C12.3359 37.7843 13.4665 38.8868 14.8611 38.8868H28.2242C27.6264 37.8347 27.2847 36.6259 27.2847 35.3404C27.2847 31.2921 30.6617 27.9991 34.8125 27.9991Z"
                                fill="#007FFF"
                            />
                            <path
                                d="M25.9983 16.9265C30.6055 16.9265 34.3404 13.2843 34.3404 8.79137C34.3404 4.29847 30.6055 0.65625 25.9983 0.65625C21.3911 0.65625 17.6562 4.29847 17.6562 8.79137C17.6562 13.2843 21.3911 16.9265 25.9983 16.9265Z"
                                fill="#007FFF"
                            />
                            <path
                                d="M50.0211 40.6843C49.3337 40.6843 48.6863 40.8447 48.109 41.1229L40.0008 35.3393L48.0499 29.5974C48.6415 29.8936 49.3105 30.0639 50.0209 30.0639C52.2774 30.0639 54.1281 28.379 54.328 26.2299C54.5607 23.7045 52.5147 21.625 50.0209 21.625C47.6314 21.625 45.694 23.5141 45.694 25.8445C45.694 26.0377 45.7121 26.2263 45.7379 26.4125L37.6637 32.1719C36.8715 31.4943 35.8582 31.1197 34.8112 31.1197C32.4217 31.1197 30.4844 33.0089 30.4844 35.3393C30.4844 37.6695 32.4217 39.5588 34.8112 39.5588C35.8662 39.5588 36.8777 39.1801 37.6637 38.5065L45.7477 44.2729C45.7159 44.4793 45.694 44.6889 45.694 44.9039C45.694 47.2341 47.6314 49.1234 50.0209 49.1234C52.404 49.1234 54.348 47.2398 54.348 44.9039C54.3482 42.5805 52.4166 40.6843 50.0211 40.6843Z"
                                fill="#007FFF"
                            />
                        </svg>
                    </Grid>
                </Grid>

                <Grid container item xs={12} md={5} className={classes.secondInfo}>
                    <Typography className={classes.label} shrink htmlFor="bootstrap-input">
                        Paste link to redirect customers to describe destination
                    </Typography>
                    <TextField
                        InputProps={{ classes: { root: classes.input, input: classes.inputLabel } }}
                        InputLabelProps={{ classes: { input: classes.inputLabel } }}
                        className={classes.urlTextfield}
                        variant="outlined"
                        placeholder="Place Url link here"
                    />
                    <Typography className={classes.label} shrink htmlFor="bootstrap-input">
                        Choose one or more keywords for your picture
                    </Typography>
                    <Select
                        isMulti
                        styles={customStyles}
                        placeholder={<div className={classes.placeholder}>Select category</div>}
                        components={{ DropdownIndicator }}
                        options={options}
                    />

                    <Typography className={classes.label} shrink htmlFor="bootstrap-input">
                        Choose 1-5 business categories for your picture
                    </Typography>
                    <Select
                        isMulti
                        styles={customStyles}
                        components={{ DropdownIndicator }}
                        options={options}
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
