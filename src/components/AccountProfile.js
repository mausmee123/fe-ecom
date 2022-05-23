import React from "react";
import MultipleSelect from "./MultiSelect";
import Button from "@material-ui/core/Button";
import {alpha,styled} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
}));




const AccountProfile = (props) => {
    const { isAdmin } = props;
    return(
        <div className="card-comp a-profile">
            <Card variant="outlined" className="card-wrap">
                <CardContent className="card-content">
                    <Typography className="heading-title bg-blue" style={{ textAlign: "left" }}>
                        Account Profile
                    </Typography>

                    <form className="card-inner">
                        <Grid container spacing={1} mt={0} >
                            <Grid item xs={12} md={6}>
                                <RedditTextField
                                    label="Account Email"
                                    variant="outlined"
                                    type="email"
                                    style={{ display: "grid" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <RedditTextField
                                    label="Full Name of Owner"
                                    variant="outlined"
                                    type="text"
                                    style={{ display: "grid" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <RedditTextField
                                    label="Add more users"
                                    variant="outlined"
                                    type="email"
                                    style={{ display: "grid" }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <MultipleSelect style={{ marginTop: 11, marginBottom: 0 }}/>
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
                                <Button variant="contained" color="primary" className="custom-btn">Save Changes</Button>
                            </Grid>


                            <Grid item xs={12} md={6} style={{ marginTop: 15 }}>
                                <Typography variant="subtitle2" color="text.secondary" className="sub-title"style={{ marginBottom: '15px' }} component="div">
                                   Change Password
                                </Typography>
                                <Grid item xs={12}>
                                    <RedditTextField
                                        label="Change Password"
                                        variant="outlined"
                                        style={{ marginTop: 11,display: "grid" }}
                                        type="password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <RedditTextField
                                        label="Confirm your new password"
                                        variant="outlined"
                                        style={{ marginTop: 11,display: "grid" }}
                                        type="password"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ marginTop: 15 }}>
                                <Button variant="contained" color="primary" style={{marginTop:'40px'}} className="custom-btn">Update Password</Button>
                            </Grid>

                        </Grid>
                    </form>

                </CardContent>
            </Card>
        </div>
    );
};

export default AccountProfile;