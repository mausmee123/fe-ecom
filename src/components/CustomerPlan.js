import React from "react";
import CustomPayment from "../components/CustomPayment";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Header from "./common/Header";
import Dividers from "./common/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const useStyle = makeStyles((theme) => ({
    button: {
        height: '40px',
        width: '50%',
        fontSize: '15px !important',
        textTransform: 'capitalize !important',
        marginTop: '30px !important',
        color: '#ffffff !important',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        }
    },
    color: {
        fontSize: '15px',
        color: '#fff',
        textTransform: 'capitalize',
    }
}));


function CustomerPlan() {
    const classes = useStyle();
    return (
        <>
        <Header />
            <Dividers />
        <div className="Customer-plans">
            <Typography color="secondary" style={{margin: "20px 0 10px"}} variant="h5" gutterBottom component="div">
                Suggested Plan
            </Typography>
            <Typography className="subtitle" variant="h6" gutterBottom>
                Suggested subscription price is fairly adapted to your company size.
            </Typography>
            <Box className="container" mx={2} variant="outlined">
                <Grid container spacing={2}>
                    <Grid item md={7} xs={12}>
                        <CustomPayment/>
                    </Grid>
                    <Grid item md={5} xs={12} className="C-plans-form" mt={2} pt={5}>
                        <Box className="customer-box border-green">
                            <Typography className="heading-title bg-green">choose a payment method</Typography>
                            <form className="customer-form">
                                <Grid container spacing={2} mt={0}>
                                    <Grid item sm={8} xs={12}>
                                        <InputLabel className="lable-form" variant="standard" align="left" htmlFor="uncontrolled-native">
                                            name of company
                                        </InputLabel>
                                        <TextField id="outlined-basic" size="small" type="text" variant="outlined" style={{display: 'grid'}}/>
                                    </Grid>
                                    <Grid item sm={4} xs={12}>
                                        <InputLabel className="lable-form" variant="standard" align="left" htmlFor="uncontrolled-native">
                                            vat id (optional)
                                        </InputLabel>
                                        <TextField id="outlined-basic"  size="small" type="text" variant="outlined" style={{display: 'grid'}}/>
                                    </Grid>
                                    <Grid item sm={8} xs={12}>
                                        <InputLabel className="lable-form" variant="standard" align="left"
                                                    htmlFor="uncontrolled-native">
                                            business email
                                        </InputLabel>
                                        <TextField id="outlined-basic" size="small" type="text" variant="outlined" style={{display: 'grid'}}/>
                                    </Grid>
                                    <Grid item sm={4} xs={12}>
                                        <InputLabel className="lable-form" align="left" variant="standard"
                                                    htmlFor="uncontrolled-native">
                                            phone/fax
                                        </InputLabel>
                                        <TextField id="outlined-basic" size="small"  type="text" variant="outlined" style={{display: 'grid'}}/>
                                    </Grid>
                                </Grid>
                                <Grid container mt={0} spacing={2}>
                                    <Grid item xs={12}>
                                        <InputLabel className="lable-form" align="left" variant="standard" htmlFor="uncontrolled-native">
                                            country
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            style={{display: 'grid'}}
                                            size="small"
                                            variant="outlined">
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputLabel className="lable-form" align="left" variant="standard" htmlFor="uncontrolled-native">
                                            address
                                        </InputLabel>
                                        <TextField id="outlined-basic" size="small"  type="text" variant="outlined" style={{display: 'grid'}}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputLabel className="lable-form" align="left" variant="standard" htmlFor="uncontrolled-native">
                                            extended address
                                        </InputLabel>
                                        <TextField id="outlined-basic" size="small"  type="email" variant="outlined" style={{display: 'grid'}}/>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} mt={0}>
                                    <Grid item sm={6} xs={12}>
                                        <InputLabel className="lable-form" align="left" variant="standard" htmlFor="uncontrolled-native">
                                            state/province
                                        </InputLabel>
                                        <TextField id="outlined-basic" size="small" type="text" variant="outlined" style={{display: 'grid'}}/>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <InputLabel className="lable-form" align="left" variant="standard" htmlFor="uncontrolled-native">
                                            zip code / postal code
                                        </InputLabel>
                                        <TextField id="outlined-basic" size="small" type="text" variant="outlined" style={{display: 'grid'}}/>
                                    </Grid>
                                </Grid>
                                <Button color="secondary" variant="contained" className={classes.button} classes={{label: classes.color}} type="submit">send order</Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" className={classes.button} classes={{label: classes.color}}
                        type="submit">sign up</Button>
            </Box>
        </div>
</>
    )
}

export default CustomerPlan;