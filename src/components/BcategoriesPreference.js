import React from 'react';
import {
    createTheme,
    makeStyles,
    Grid,
    Typography,
    Button,
    TextField,
} from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Select from "@material-ui/core/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MenuItem from "@material-ui/core/MenuItem";

const schema = yup.object().shape({
    BusinessCategory: yup.string().required(),
    categories: yup.string().required(),
});

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
        overFlow: 'hidden'
    },
    productCategoriesTitle: {
        backgroundColor: '#007FFF',
        height: '50px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: '22px',
        fontStyle: 'normal',
        color: '#fff',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        },
    },
    inputFieldWrapper: {
        padding: '0 15px'
    },
    inputFieldTitle: {
        fontStyle: 'normal',
        fontSize: '14px',
        margin: '10px 0',
        color: '#656565',
        textAlign: 'center',
    },
    input: {
        display:'grid',
        height: '38px',
    },
    inputField: {
        width: '90%',
        height: '38px',
        padding: '0 10px',
        [theme.breakpoints.down('sm')]: {
            height: '38px',
        }
    },
    deleteCategoryButton: {
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '15px',
        paddingRight: '15px',
        [theme.breakpoints.down('md')]: {
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
        margin: '15px 0',
        textTransform: 'capitalize',
        [theme.breakpoints.down('sm')]: {
            height: '38px',
            margin: '5px 0',
        }
    },
    keyword: {
        border: '1px solid rgba(0, 0, 0, 0.12)',
        marginTop: '20px',
        borderRadius: '15px',
    },
    businessCategories: {
        border: '1px solid green',
    },
    previewAndPublishButton: {
        marginTop: '20px',
        marginBottom: '45px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: '15px',
        paddingRight: '15px',
        textTransform: 'capitalize',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '15px',
        },
    },
    previewAndPublish: {
        color: '#fff',
        height: '56px',
        width: '100%',
        margin: '15px 0',
        textTransform: 'capitalize',
        [theme.breakpoints.down('sm')]: {
            height: '38px',
            margin: '5px 0',
        },
    },
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
        width: '100%',
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
        height: '38px',
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

const BcategoriesPreference = () => {

    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };

    const { register, handleSubmit, formState: { errors } , reset} = useForm({
        resolver: yupResolver(schema),
    });

    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit(e => onSubmitHandler(e))} style={{width: '100%'}}>
                <Grid container className={classes.keyword} item xs={12}>
                    <Grid className={classes.productCategoriesTitle} item xs={12}>
                        <Typography className={classes.header}>
                            Create/Delete Business Categories Preference
                        </Typography>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={12} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert New Business Category
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                            {...register("BusinessCategory")}
                        />
                        <div className="invalid-feedback">{errors.BusinessCategory?.message}</div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.previewAndPublish}
                            type="submit"
                        >
                            Add Business
                        </Button>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={12} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            List of all Business Category
                        </Typography>
                        {/*<TextField className={classes.input} variant='outlined' InputProps={{classes: { input: classes.inputField }}}/>*/}
                        <Select
                            variant="outlined"
                            styles={customStyles}
                            className={classes.input}
                            placeholder={<div className={classes.placeholder}>Select category</div>}
                            components={{ DropdownIndicator }}
                            {...register("categories")}
                        >
                            {options.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                        <div className="invalid-feedback">{errors.categories?.message}</div>
                        <Button variant="contained" className={classes.deleteCategory}>
                            Delete Business
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </ThemeProvider>
    );
}
export default BcategoriesPreference;
