import React from "react";
import MultipleSelect from "./MultiSelect";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AccountPassword from "./AccountPassword";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CustomTextField from '../components/common/InputField';
import styled from 'styled-components';

const AutocompleteStyle = styled(Autocomplete)({
  "& .MuiChip-root": {
    color: '#fff',
    fontSize: "15px",
    backgroundColor: '#007FFF',
    borderRadius:'5px',
    alignItems: "flex-start",
    padding:"5px 0"
  },
  "& .MuiChip-deleteIcon":{
    height:'15px',
    width:'15px',
    color: "rgba(255, 255,255, 0.4)",
    margin:"-3px 4px 0 -8px"
  },
  "& .MuiChip-deleteIcon:hover":{
    color: "rgba(255, 255,255, 0.26)",
  }
});



const schema = yup.object().shape({
  Name: yup.string().required(),
  Email: yup.string().email().required(),
  user_email: yup.string().email().required(),
  multi_email: yup.array()
    .of(
      yup.object().shape({
        value: yup.string(),
        label: yup.string()
      })
    )
    .min(2, "Options is required")
});

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const AccountProfile = (props) => {
  const { isAdmin } = props;

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const { register, setValue, handleSubmit, formState: { errors } , reset, control} = useForm({
    resolver: yupResolver(schema),
  });

  return(
    <div className="card-comp a-profile">
      <Card variant="outlined" className="card-wrap">
        <CardContent className="card-content">
          <Typography className="heading-title bg-blue" style={{ textAlign: "left" }}>
            Account Profile
          </Typography>

          <form onSubmit={handleSubmit(e => onSubmitHandler(e))} className="card-inner" noValidate>
            <Grid container spacing={1} mt={0} >
              <Grid item xs={12} md={6}>
                <CustomTextField
                  color="primary"
                  disableUnderline={false}
                  label="Account Email"
                  variant="filled"
                  type="email"
                  style={{ display: "grid" }}
                  validation={register('Email', {onChange: (e) => setValue('select', e.target.value, { shouldValidate: true })})}
                />
                <div className="invalid-feedback">{errors.Email?.message}</div>

              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField
                  color="primary"
                  disableUnderline={false}
                  label="Full Name of Owner"
                  variant="filled"
                  type="text"
                  style={{ display: "grid"}}
                  validation={register('Name')}
                />
                <div className="invalid-feedback">{errors.Name?.message}</div>

              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField
                  color="primary"
                  disableUnderline={false}
                  label="Add more users"
                  variant="filled"
                  type="email"
                  validation={register('user_email')}
                />
                <div className="invalid-feedback">{errors.user_email && 'Users email is required'}</div>

              </Grid>
              <Grid item xs={12} md={6} style={{ marginTop: 10}}>

                <Controller
                  name="multi_email"
                  control={control}
                  defaultValue={[]}
                  render={({ field: { ref, ...field }, fieldState: { error } }) => (
                    <AutocompleteStyle
                      {...field}
                      disableClearable
                      disablePortal
                      filterSelectedOptions
                      multiple
                      getOptionDisabled={(option) => option.disabled}
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => field.onChange(value)}
                      options={options}
                      renderInput={(params) => (
                        <TextField
                          error={!!error}
                          helperText={error?.message}
                          variant="outlined"
                          type="search"
                          inputRef={ref}
                          {...params}
                        />
                      )}
                    />
                  )}
                />

              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" color="text.secondary" className="sub-title" style={{ marginBottom: '15px' }} component="div">
                  Choose permission for the added user
                </Typography>
                <Button variant="contained" color="primary" className="user-btn">Editor</Button>
                <Button variant="contained" color="primary" className="user-btn">Viewer</Button>
                {isAdmin && <Button variant="contained"  className="user-btn subscription">Admin</Button>}

              </Grid>
              <Grid item xs={12} md={6} className="us-btn">
                <Button variant="contained" color="secondary" className="user-btn">Add User</Button>
                <Button variant="contained" color="primary" className="custom-btn" type="submit">Save Changes</Button>
              </Grid>
            </Grid>
          </form>

          <AccountPassword/>

        </CardContent>
      </Card>
    </div>
  );
};

export default AccountProfile;