import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import ToggleSwitch from "./ToogleSwitch";
import MultipleSelect from "./MultiSelect";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const notificationLabel = [
    { label: "Enable invoice payment notification" },
    { label: "Enable notification when a user has logged in"},
    { label: "Enable notification when a user has upploaded new picture" },
    { label: "Enable notification for daily statatistics report"},
    { label: "Enable notification for daily statatistics report"},
];

const Notifications = (props) => {
    const { isAdmin } = props;
    return(
        <div className="card-comp notification">
            <Card variant="outlined" className="custom-wrap card-wrap">
                <CardContent className="card-content">
                    <Typography className="heading-title bg-blue" style={{ textAlign: "left" }}>
                        Notifications
                    </Typography>
                    <div className="card-inner">
                        {isAdmin &&
                        <Grid container spacing={2} className="card-toggle">
                            <Grid item md={6} sm={6} xs={12}>
                                <MultipleSelect/>
                            </Grid>
                            <Grid item md={3} sm={3} xs={6}>
                                <Button variant="contained" color="primary" className="addUser btn">Add User</Button>
                            </Grid>
                            <Grid item md={3} sm={3} xs={6}>
                                <Button className="btn subscription" variant="contained">Remove User</Button>
                            </Grid>
                        </Grid>
                        }
                        {notificationLabel.map((item) => (
                            <ToggleSwitch text={item.label}/>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Notifications;