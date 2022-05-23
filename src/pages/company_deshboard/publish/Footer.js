import React, { useState } from 'react';
import { Button, Grid, makeStyles, TextField, ThemeProvider, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    wrapper: {
        paddingLeft: '10px',
        width: '100%'
    },
    uploadLogoTitle: {
        color: '#656565',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '10px',
            fontSize: '18px'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '10px',
            fontSize: '11px'
        }
    },
    uploadLogoImage: {
        border: '1px solid #656565',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px'
    },
    logoSvgIcon: {
        width: '55px',
        height: '60px'
    },
    uploadLogoButton: {
        width: '150px',
        height: '32px',
        fontSize: '15px',
        borderRadius: '12px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '25px',
            fontSize: '8px'
        }
    },
    dragLogoTitle: {
        fontSize: '14px',
        color: '#656565',
        fontWeight: '500',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px'
        }
    },
    UploadLogoSaveButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    savebutton: {
        color: '#fff',
        width: '80%',
        height: '40px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        }
    },
    companyNameTitle: {
        color: '#656565',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '10px',
            fontSize: '18px'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '10px',
            fontSize: '11px'
        }
    },
    name: {
        display: 'flex',
        alignItems: 'center'
        // gap: '1em'
    },
    companyName: {
        width: '95%'
    },
    companyNameLabel: {
        height: '0px'
    },
    colorCode: {
        paddingRight: '7px',
        [theme.breakpoints.down('xs')]: {
            paddingRight: '3px'
        }
    },
    colorDotBlue: {
        height: '25px',
        width: '25px',
        backgroundColor: '#007fff',
        borderRadius: '50%',
        display: 'inline-block',
        [theme.breakpoints.down('xs')]: {
            height: '16px',
            width: '16px'
        }
    },
    colorDotGreen: {
        height: '25px',
        width: '25px',
        backgroundColor: '#11cb5f',
        borderRadius: '50%',
        display: 'inline-block',
        [theme.breakpoints.down('xs')]: {
            height: '16px',
            width: '16px'
        }
    },
    colorDotRed: {
        height: '25px',
        width: '25px',
        backgroundColor: '#C32525',
        borderRadius: '50%',
        display: 'inline-block',
        [theme.breakpoints.down('xs')]: {
            height: '16px',
            width: '16px'
        }
    },
    colorDotYellow: {
        height: '25px',
        width: '25px',
        backgroundColor: '#FCB900',
        borderRadius: '50%',
        display: 'inline-block',
        [theme.breakpoints.down('xs')]: {
            height: '16px',
            width: '16px'
        }
    },
    publish: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '50px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0px'
        }
    }
}));
export default function Footer() {
    const classes = useStyle();
    const [logoImage, setLogoImage] = useState('');

    const logoUpload = (e) => {
        console.log('logoImage1', logoImage);
        const [img] = e.target.files;
        const image1 = URL.createObjectURL(img);
        console.log('image1', image1);
        setLogoImage(URL.createObjectURL(img));
    };
    return (
        <Grid container className={classes.wrapper}>
            <Grid item xs={12}>
                <Typography className={classes.uploadLogoTitle}>
                    Upload your company logo to the picture card
                </Typography>
            </Grid>

            <Grid container item xs={12}>
                <Grid item md={2} sm={7} xs={7} className={classes.uploadLogoImage}>
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
                        onChange={(e) => logoUpload(e)}
                    />
                    <label htmlFor="logo-upload-file">
                        <Button
                            variant="contained"
                            classes={{ containedPrimary: classes.uploadLogoButton }}
                            color="primary"
                            component="span"
                        >
                            Upload Logo
                        </Button>
                    </label>
                    <Typography className={classes.dragLogoTitle}>
                        or drag and drop image here
                    </Typography>
                </Grid>

                <Grid item md={1} sm={3} xs={5} className={classes.UploadLogoSaveButton}>
                    <Button
                        variant="contained"
                        className={classes.savebutton}
                        color="secondary"
                        component="span"
                    >
                        Save
                    </Button>
                </Grid>

                <Grid container item md={4} sm={12}>
                    <Grid item xs={12}>
                        <Typography className={classes.companyNameTitle}>
                            Option to write company name with color instead of Uploading logo
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} className={classes.name}>
                        <Grid item xs={7}>
                            <TextField
                                className={classes.companyName}
                                InputProps={{ classes: { input: classes.companyNameLabel } }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={0.5} className={classes.colorCode}>
                            <span className={classes.colorDotBlue} id="red" />
                        </Grid>
                        <Grid item xs={0.5} className={classes.colorCode}>
                            <span className={classes.colorDotGreen} id="blue" />
                        </Grid>
                        <Grid item xs={0.5} className={classes.colorCode}>
                            <span className={classes.colorDotRed} id="green" />
                        </Grid>
                        <Grid item xs={0.5} className={classes.colorCode}>
                            <span className={classes.colorDotYellow} id="blue" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={5} sm={12} xs={12}>
                    <Button
                        className={classes.publish}
                        variant="contained"
                        color="secondary"
                        classes={{ label: classes.buttonTextColor }}
                    >
                        Publish
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
