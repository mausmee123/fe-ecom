import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import BasicDatePicker from "./DatePicker";
import Button from "@material-ui/core/Button";


const CardPayment = () => {

  return(
    <div>
      <form style={{marginTop:'10px'}}>
        <Grid container spacing={2} mt={0} >
          <Grid item xs={8}>
            <InputLabel className="label-form" variant="standard" align="left">
              Card number
            </InputLabel>
            <TextField
              variant="outlined"
              id="outlined-size-small"
              size="small"
              style={{display: 'grid'}}
              type="text"
            />
          </Grid>
          <Grid item xs={4}>
            <InputLabel className="label-form" variant="standard" align="left">
              Date
            </InputLabel>

            <BasicDatePicker/>

          </Grid>
          <Grid item xs={8}>
            <InputLabel className="label-form" variant="standard" align="left">
              Name on card
            </InputLabel>
            <TextField
              variant="outlined"
              id="outlined-size-small"
              size="small"
              style={{display: 'grid'}}
              type="email"
            />
          </Grid>
          <Grid item xs={4}>
            <InputLabel className="label-form" align="left" variant="standard">
              Card security code
            </InputLabel>
            <TextField
              variant="outlined"
              id="outlined-size-small"
              size="small"
              style={{display: 'grid'}}
              type="text"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" className="payment-btn">pay now</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CardPayment;