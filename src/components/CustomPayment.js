import React from "react";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import List from "@mui/material/List";


const card = (
    <React.Fragment>
        <CardContent style={{ padding: 0 }}>
            <Typography className="heading-title bg-blue" >
                your custom plan
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
                $50 monthly fee
            </Typography>
            <Typography component="div" color="primary" variant="caption" >
                additional $20 cost per click per
            </Typography>
            <List>
                <ListItem className="list-item">
                    <ListItemIcon>
                        <CheckCircleSharpIcon className="check-circle" color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        className="item-text"
                        primary="upload 1-5 pictures and monitor the traffic for each picture"
                    />
                </ListItem>
                <ListItem className="list-item">
                    <ListItemIcon>
                        <CheckCircleSharpIcon className="check-circle" color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        className="item-text"
                        primary="upload 1-5 pictures and monitor the traffic for each picture"
                    />
                </ListItem>
                <ListItem className="list-item">
                    <ListItemIcon>
                        <CheckCircleSharpIcon className="check-circle" color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        className="item-text"
                        primary="upload 1-5 pictures and monitor the traffic for each picture"
                    />
                </ListItem>
                <ListItem className="list-item">
                    <ListItemIcon>
                        <CheckCircleSharpIcon className="check-circle" color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        className="item-text"
                        primary="upload 1-5 pictures and monitor the traffic for each picture"
                    />
                </ListItem>
                <ListItem className="list-item">
                    <ListItemIcon>
                        <CheckCircleSharpIcon className="check-circle" color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        className="item-text"
                        primary="upload 1-5 pictures and monitor the traffic for each picture"
                    />
                </ListItem>
            </List>


        </CardContent>
        <CardActions className="bottom-list" >
            <ListItem className="list-item">
                <ListItemIcon    style={{minWidth: '30px'}}>
                    <NoteAddIcon className="check-circle" color="primary"/>
                </ListItemIcon>
                <ListItemText
                    className="item-text"
                    primary="upload 1-5 pictures"
                />
            </ListItem>
            <ListItem className="list-item">
                <ListItemIcon  style={{minWidth: '30px'}}>
                    <EnergySavingsLeafOutlinedIcon className="check-circle" color="primary"/>
                </ListItemIcon>
                <ListItemText
                    className="item-text"
                    primary="traffic for each picture"
                />
            </ListItem>
        </CardActions>
    </React.Fragment>
);



const CustomPayment = () => {
    return (
        <div className="suggest-plan">
            <div className="custom-plan">
                <Card variant="outlined"  className="border-blue" style={{ borderRadius: "10px" }}>{card}</Card>
            </div>
        </div>
    );
};

export default CustomPayment;