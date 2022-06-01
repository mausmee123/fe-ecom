import React from "react";
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ListAltIcon from '@material-ui/icons/ListAlt';



const PricingSub = () =>{
    return(
        <div>
            <div className="About-us">
                <div className="About-head border-blue">
                    <ListItem variant="h6" style={{float: 'left'}}>
                        <ListItemIcon style={{minWidth: '35px'}}>
                            <DescriptionSharpIcon color="primary"/>
                        </ListItemIcon>
                        <ListItemText variant="h6" className="text-blue">Pricing & Subscription</ListItemText>
                    </ListItem>
                </div>
                <div className="About-content">
                    <ListItem variant="h6" style={{float: 'left'}}>
                        <ListItemIcon style={{minWidth: '35px'}}>
                            <LocalOfferIcon color="primary"/>
                        </ListItemIcon>
                        <ListItemText variant="h6" className="text-blue">Pricing</ListItemText>
                    </ListItem>
                    <Toolbar className="About-title text-blue border-blue">
                        <Typography variant="h6" noWrap component="div" style={{margin:"0 auto"}}>
                            Picture Placeholder
                        </Typography>
                    </Toolbar>
                    <Toolbar className="About-desc">
                        <Typography variant="body2" className="About-p" gutterBottom>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.</p>
                        </Typography>
                    </Toolbar>
                </div>
                <div className="About-content">
                    <ListItem variant="h6" style={{float: 'left'}}>
                        <ListItemIcon style={{minWidth: '35px'}}>
                            <ListAltIcon color="primary"/>
                        </ListItemIcon>
                        <ListItemText variant="h6" className="text-blue">Subscription</ListItemText>
                    </ListItem>
                    <Toolbar className="About-title text-blue border-blue">
                        <Typography variant="h6" noWrap component="div" style={{margin:"0 auto"}}>
                            Picture Placeholder
                        </Typography>
                    </Toolbar>
                    <Toolbar className="About-desc">
                        <Typography variant="body2" className="About-p" gutterBottom>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.</p>

                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.</p>
                        </Typography>
                    </Toolbar>
                </div>
            </div>
        </div>
    )
}
export default PricingSub;