import React, {useState} from 'react';
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
import Select, { components } from 'react-select';
import Radio from "@material-ui/core/Radio/Radio";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    ProductCategory: yup.string().required(),
    SubCategory1: yup.string().required(),
    SubCategory2: yup.string().required(),
    SubCategory3: yup.string().required(),
    ListCategory: yup.string().required(),
    file: yup.mixed()
      .test('required', "You need to provide a file", (value) =>{
          return value && value.length
      } )
      .test("fileSize", "The file is too large", (value, context) => {
          return value && value[0] && value[0].size <= 200000;
      })
      .test("type", "We only support jpeg", function (value) {
          return value && value[0] && value[0].type === "image/jpeg";
      }),
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
        border: '2px solid #007FFF',
        height: '200px',
        width: '200px',
        borderRadius: '100%',
        display: 'flex',
        padding: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto',
            maxWidth: '100%',
        },
    },
    logoSvgIcon: {
        width: '50px',
        height: '50px',
    },
    uploadLogoButton: {
        fontSize: '12px',
        borderRadius: '20px',
        textTransform: 'capitalize',
    },
    dragLogoTitle: {
        fontSize: '12px',
        color: '#656565',
        fontWeight: '600',
        fontStyle: 'normal',
        textAlign: 'center',
        marginLeft: '12px',
        marginRight: '12px',
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
    keyword: {
        border: '1px solid rgba(0, 0, 0, 0.12)',
        marginTop: '20px',
        borderRadius: '15px',
    },
    businessCategories: {
        border: '1px solid green',
    },
    colorDotBlue: {
        color:'#007fff',
        '&.Mui-checked': {
            color: '#007fff',
            backgroundColor:'transparent',
        },
    },
    colorDotGreen: {
        color:'#00D037',
        '&.Mui-checked': {
            color: '#00D037',
            backgroundColor:'transparent',
        },
    },
    colorDotRed: {
        color:'#C32525',
        '&.Mui-checked': {
            color: '#C32525',
            backgroundColor:'transparent',
        },
    },
    colorDotYellow: {
        color: '#FCB900',
        '&.Mui-checked': {
            color: '#FCB900',
            backgroundColor: 'transparent',
        },
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

const ProductPreference = () => {
    const classes = useStyle();
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [image, setImage] = useState();
    const [logoImage, setLogoImage] = useState('');

    const handleFileChange = (e) => {
        const [file] = e.target.files;
        setImage([...image, { img: URL.createObjectURL(file) }]);
        console.log('image', image);
    };

    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const logoUpload = (e) => {
        console.log('logoImage1', logoImage);
        const [img] = e.target.files;
        const image1 = URL.createObjectURL(img);
        console.log('image1', image1);
        setLogoImage(URL.createObjectURL(img));
    };

    const { register, setValue, handleSubmit, formState: { errors } , reset} = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container style={{ width: '100%'}}>
                <form onSubmit={handleSubmit(e => onSubmitHandler(e))}>
                <Grid container className={classes.productCategories} style={{ paddingBottom: "15px"}} item xs={12}>
                    <Grid className={classes.productCategoriesTitle} item xs={12}>
                        <Typography className={classes.header}>
                            Create/Delete Product Categories Preferences
                        </Typography>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Insert/edit Product Category
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                            {...register("ProductCategory")}
                        />
                        <div className="invalid-feedback">{errors.ProductCategory?.message}</div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Add Sub-Category Level 1
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                            {...register("SubCategory1")}
                        />
                        <div className="invalid-feedback">{errors.SubCategory1?.message}</div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Add Sub-Category Level 2
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                            {...register("SubCategory2")}
                        />
                        <div className="invalid-feedback">{errors.SubCategory2?.message}</div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            Add Sub-Category Level 3
                        </Typography>
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.inputField } }}
                            {...register("SubCategory3")}
                        />
                        <div className="invalid-feedback">{errors.SubCategory3?.message}</div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={12} xs={12} className={classes.inputFieldWrapper}>
                        <Typography className={classes.inputFieldTitle}>
                            List of all categories
                        </Typography>
                        {/*<TextField className={classes.input} variant='outlined' InputProps={{classes: { input: classes.inputField }}}/>*/}
                        <Select
                            styles={customStyles}
                            className={classes.input}
                            placeholder={<div className={classes.placeholder}>Select category</div>}
                            components={{ DropdownIndicator }}
                            options={options}
                            {...register("ListCategory")}
                        />
                        <div className="invalid-feedback">{errors.ListCategory?.message}</div>
                    </Grid>

                    <Grid container item lg={4} md={6} sm={12} xs={12} className={classes.previewAndPublishButton}>
                        <Button variant="contained" className={classes.deleteCategory}>
                            Delete Category
                        </Button>

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
                            type="submit"
                        >
                            Publish Category
                        </Button>
                    </Grid>
                    <Grid
                        item
                        className="selectBtn"
                        xs={12} md={6} sm={12} lg={4}
                    >
                        <Typography className='inputFieldTitle'>Pick ring color</Typography>
                        <Grid container item xs={12} className={classes.name}>
                            <Grid item xs={0.5} className={classes.colorCode}>
                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    value="a"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                    className={classes.colorDotBlue}
                                />
                            </Grid>
                            <Grid item xs={0.5} className={classes.colorCode}>
                                <Radio
                                    checked={selectedValue === 'b'}
                                    onChange={handleChange}
                                    value="b"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'B' }}
                                    className={classes.colorDotGreen}
                                />
                            </Grid>
                            <Grid item xs={0.5} className={classes.colorCode}>
                                <Radio
                                    checked={selectedValue === 'c'}
                                    onChange={handleChange}
                                    value="c"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'C' }}
                                    className={classes.colorDotRed}
                                />
                            </Grid>
                            <Grid item xs={0.5} className={classes.colorCode}>
                                <Radio
                                    checked={selectedValue === 'd'}
                                    onChange={handleChange}
                                    value="d"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'D' }}
                                    className={classes.colorDotYellow}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        xs={12} md={6} sm={12} lg={4}
                        className="uploadlIcon"
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
                              id="contained-button-file"
                              {...register("file")}
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
                            <div className={classes.invalidFeedback}>{errors.file?.message}</div>
                            <Typography className={classes.dragLogoTitle}>
                                or drag and drop image here
                            </Typography>

                        </div>
                    </Grid>

                </Grid>
                {/*<Grid className={classes.businessCategories} item xs={12}></Grid>*/}
                </form>
            </Grid>
        </ThemeProvider>
    );
}
export default ProductPreference;
