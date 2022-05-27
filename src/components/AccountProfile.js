import React from "react";
import MultipleSelect from "./MultiSelect";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AccountPassword from "./AccountPassword";


const schema = yup.object().shape({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    user_email: yup.string().email().required(),
    multi_email: yup.string().email().required(),
});


const AccountProfile = (props) => {
    const { isAdmin } = props;

    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };

    const { register, setValue, handleSubmit, formState: { errors } , reset} = useForm({
        resolver: yupResolver(schema),
    });

    return(
        <div className="card-comp a-profile">
            <Card variant="outlined" className="card-wrap">
                <CardContent className="card-content">
                    <Typography className="heading-title bg-blue" style={{ textAlign: "left" }}>
                        Account Profile
                    </Typography>

                            <form onSubmit={handleSubmit(e => onSubmitHandler(e))} className="card-inner">
                                <Grid container spacing={1} mt={0} >
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Account Email"
                                    variant="outlined"
                                    type="email"
                                    style={{ display: "grid" }}
                                    {...register('Email', {onChange: (e) => setValue('select', e.target.value, { shouldValidate: true })})}
                                />
                              <div className="invalid-feedback">{errors.Email?.message}</div>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Full Name of Owner"
                                    variant="outlined"
                                    type="text"
                                    style={{ display: "grid"}}
                                    {...register('Name')}
                                />
                              <div className="invalid-feedback">{errors.Name?.message}</div>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Add more users"
                                    variant="outlined"
                                    type="email"
                                    style={{ display: "grid" , marginTop:"10px"}}
                                    {...register('user_email')}
                                />
                              <div className="invalid-feedback">{errors.user_email && 'Users email is required'}</div>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <MultipleSelect style={{ marginTop: 21, marginBottom: 0 }} {...register('multi_email')}/>
                              <div className="invalid-feedback">{errors.multi_email && 'At least one email must be selected'}</div>

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