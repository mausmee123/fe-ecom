import React from "react";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";


const customLabel = [
    { label: "upload 1-5 pictures and monitor the traffic for each picture" },
    { label: "Ad 1-10 keywords & 1-5 category for search optimization"},
    { label: "Ad up to 10 user with promision to manage your company account" },
    { label: "Ad link to each picture that end users can share on social platforms"},
    { label: "Free to cancel your plan anytime. No subscription lock-in period"},
];


const CustomPlan = (props) => {
    const {isAdmin} = props;
    return(
        <div className="card-comp custom-plan">
            <Card variant="outlined" className="custom-wrap card-wrap">
                <CardContent className="card-content">
                    <Typography className="heading-title bg-blue">
                        { isAdmin && <Button className="customPlan-btn" style={{float: 'left'}}>Edit Employees</Button>}
                        <span className="sub-ttl">your custom plan</span>
                        { isAdmin && <Button className="customPlan-btn" style={{float: 'right'}}>Edit Setup</Button>}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div" style={{textAlign: 'center',color:'#656565'}}>
                        $50 monthly fee
                    </Typography>
                    <Typography component="div" color="primary" variant="caption" style={{textAlign: 'center'}}>
                        additional $20 cost per click per
                    </Typography>
                    <List>
                        {customLabel.map((item) => (
                            <ListItem className="list-item">
                                <ListItemIcon>
                                    <CheckCircleSharpIcon className="check-circle" color="primary"/>
                                </ListItemIcon>
                                <ListItemText
                                    className="item-text"
                                    primary={item.label}
                                />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <CardActions>
                    <ListItem className="list-item">
                        <ListItemIcon>
                            <NoteAddIcon className="check-circle" color="primary"/>
                        </ListItemIcon>
                        <ListItemText
                            className="item-text"
                            primary="upload 1-5 pictures"/>
                    </ListItem>
                    <ListItem className="list-item">
                        <ListItemIcon>
                            <EnergySavingsLeafOutlinedIcon className="check-circle" color="primary"/>
                        </ListItemIcon>
                        <ListItemText
                            className="item-text"
                            primary="traffic for each picture"/>
                    </ListItem>
                </CardActions>
            </Card>
        </div>
    );
};

export default CustomPlan;