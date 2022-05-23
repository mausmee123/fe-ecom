import React from 'react';
import {
    createTheme,
    makeStyles,
    Grid,
    Typography,
    Button,
    TextField,
    FormControl,
    MenuItem
} from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CustomTextField from '../../../components/common/InputField';
import NativeSelectInput from '@material-ui/core/NativeSelect/NativeSelectInput';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Select, { components } from 'react-select';

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
    productCategories: {
        borderT: '1px solid red',

        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    productCategoriesTitle: {
        backgroundColor: '#007FFF',
        height: '60px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: '33px',
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        color: '#fff',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px'
        }
    },
    inputFieldWrapper: {
        marginTop: '10px'
    },
    inputFieldTitle: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontSize: '23px',
        marginLeft: '5%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px'
        }
    },
    input: {
        width: '90%',
        marginLeft: '5%'
    },
    inputField: {
        width: '90%',
        height: '20px',
        [theme.breakpoints.down('sm')]: {
            height: '0px'
        }
    },
    deleteCategoryButton: {
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '15px',
        paddingRight: '15px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '32px'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '24px'
        }
    },
    deleteCategory: {
        backgroundColor: '#C32525 !important',
        color: '#fff',
        height: '56px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '38px',
            fontSize: '10px'
        }
    },
    ring: {
        width: '45px',
        height: '45px',
        border: '2px solid red',
        borderRadius: '50%',
        marginRight: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '30px',
            height: '30px',
            marginRight: '13px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15px',
            height: '15px',
            marginRight: '8px'
        }
    },
    uploadIcon: {
        border: '1px solid blue',
        height: '400px',
        width: '400px',
        borderRadius: '50%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.down('md')]: {
            width: '320px',
            height: '320px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '200px',
            height: '200px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '125px',
            height: '125px'
        }
    },
    logoSvgIcon: {
        width: '126px',
        height: '126px',
        [theme.breakpoints.down('sm')]: {
            width: '60px',
            height: '60px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '30px',
            height: '30px'
        }
    },
    uploadLogoButton: {
        width: '220px',
        height: '60px',
        fontSize: '20px',
        borderRadius: '12px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '25px',
            fontSize: '8px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '20px',
            fontSize: '5px'
        }
    },
    dragLogoTitle: {
        fontSize: '20px',
        color: '#656565',
        fontWeight: '600',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        textAlign: 'center',
        marginLeft: '12px',
        marginRight: '12px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '17px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '9px'
        }
    },
    previewAndPublishButton: {
        marginTop: '50px',
        marginBottom: '45px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: '15px',
        paddingRight: '15px',
        [theme.breakpoints.down('md')]: {},
        [theme.breakpoints.down('sm')]: {
            marginTop: '40px',
            marginBottom: '32px'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '10px',
            marginBottom: '0px'
        }
    },
    previewAndPublish: {
        color: '#fff',
        height: '56px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '38px'
        },
        [theme.breakpoints.down('xs')]: {
            // height: '20px'
            fontSize: '10px'
        }
    },
    keyword: {
        border: '1px solid blue',
        height: '200px',
        marginTop: '20px'
    },
    businessCategories: {
        border: '1px solid green',
        height: '200px'
    }
}));

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
        fontSize: '20px',
        '@media only screen and (max-width: 960px)': {
            ...provider['@media only screen and (max-width: 960px)'],
            fontSize: '15px'
        },
        '@media only screen and (max-width: 600px)': {
            ...provider['@media only screen and (max-width: 600px)'],
            fontSize: '9px'
        }
    }),
    indicatorSeparator: (provider, state) => ({
        ...provider,
        display: 'none'
    }),
    dropdownIndicator: (provider, state) => ({
        ...provider,
        padding: '0px'
    }),
    control: (provider, state) => ({
        ...provider,
        height: '56px',
        '@media only screen and (max-width: 960px)': {
            ...provider['@media only screen and (max-width: 960px)'],
            height: '38px'
        }
    })
};
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];
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
export default function AccountPreference() {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            <Grid container style={{ width: '100%' }}>
                <Grid container className={classes.productCategories} item xs={12}>
                    <Grid className={classes.productCategoriesTitle} item xs={12}>
                        <Typography className={classes.header}>
                            Create/Delete Product Categories Preferences
                        </Typography>
                    </Grid>

                    <Grid item xs={4} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        {/*<TextField className={classes.input} variant='outlined' InputProps={{classes: { input: classes.inputField }}}/>*/}
                        <Select
                            styles={customStyles}
                            className={classes.input}
                            placeholder={<div className={classes.placeholder}>Select category</div>}
                            components={{ DropdownIndicator }}
                            options={options}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.deleteCategoryButton}>
                        <Button variant="contained" className={classes.deleteCategory}>
                            Delete Category
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        style={{
                            marginTop: '10px',
                            paddingLeft: '5%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography className={classes.inputFieldTitle}>Pick ring color</Typography>
                        <Grid item style={{ display: 'flex', paddingLeft: '10px' }}>
                            <div className={classes.ring} />
                            <div className={classes.ring} />
                            <div className={classes.ring} />
                            <div className={classes.ring} />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        xs={4}
                        style={{
                            marginTop: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <div className={classes.uploadIcon}>
                            <svg
                                className={classes.logoSvgIcon}
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
                                id="logo-upload-file"
                                // onChange={(e) => logoUpload(e)}
                            />
                            <label htmlFor="logo-upload-file">
                                <Button
                                    variant="contained"
                                    classes={{ containedPrimary: classes.uploadLogoButton }}
                                    color="primary"
                                    component="span"
                                >
                                    Upload Icon
                                </Button>
                            </label>
                            <Typography className={classes.dragLogoTitle}>
                                or drag and drop image here
                            </Typography>
                        </div>
                    </Grid>
                    <Grid container item xs={4} className={classes.previewAndPublishButton}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.previewAndPublish}
                        >
                            Preview
                        </Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.previewAndPublish}
                        >
                            Publish Category
                        </Button>
                    </Grid>
                </Grid>
                <Grid container className={classes.keyword} item xs={12}>
                    <Grid className={classes.productCategoriesTitle} item xs={12}>
                        <Typography className={classes.header}>
                            Create/Delete Keyword Preference
                        </Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        {/*<TextField className={classes.input} variant='outlined' InputProps={{classes: { input: classes.inputField }}}/>*/}
                        <Select
                            styles={customStyles}
                            className={classes.input}
                            placeholder={<div className={classes.placeholder}>Select category</div>}
                            components={{ DropdownIndicator }}
                            options={options}
                        />
                    </Grid>
                </Grid>
                {/*<Grid className={classes.businessCategories} item xs={12}></Grid>*/}
            </Grid>
        </ThemeProvider>
    );
}
