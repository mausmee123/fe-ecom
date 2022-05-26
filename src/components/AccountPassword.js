import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";


const schema = yup.object().shape({
  password: yup.string().min(8).max(32).required(),
  confirm_password: yup.string().min(8).max(32).required(),
});

const AccountPassword = () => {

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const { register, setValue, handleSubmit, formState: { errors } , reset} = useForm({
    resolver: yupResolver(schema),
  });

  return(
    <form onSubmit={handleSubmit(e => onSubmitHandler(e))} className="card-inner">
      <Grid container spacing={1} mt={0} >
        <Grid item xs={12} md={6} style={{ marginTop: 15 }}>

          <Grid item xs={12}>
            <TextField
              label="Change Password"
              variant="outlined"
              style={{ marginTop: 11,display: "grid" }}
              type="password"
              {...register("password")}
            />
            {errors.password?.message}
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm new password"
              variant="outlined"
              style={{ marginTop: 11,display: "grid" }}
              type="password"
              {...register("confirm_password")}
            />
            {errors.confirm_password && 'confirm password is required'}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginTop: 15 }}>
          <Button variant="contained" color="primary" style={{marginTop:'40px'}} className="custom-btn" type="submit">Update Password</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AccountPassword;