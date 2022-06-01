import React from "react";
import HomeLogo from "../assets/HomeLogo.jpg";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SocialModel from "./SocialModel";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Slider from "react-slick";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";

const postImages = [HomeLogo, HomeLogo, HomeLogo, HomeLogo, HomeLogo, HomeLogo];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    border: '0px',
    boxShadow: 24,
    outline:0,
};

const PostModel = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides",
        prevArrow: <ChevronLeftOutlinedIcon />,
        nextArrow: <ChevronRightOutlinedIcon />,
    };

    return(
        <>
        <div className="post-slider post-model">
            <Box style={{ ...style, width: '90%' , height: '70%'}}>
                <Card className="card-wrap">
                    <Slider {...settings}>
                    {
                        postImages.map((item) => (
                    <CardMedia
                        component="img"
                        src={item}
                    />
                        ))}
                    </Slider>
                    <CardContent className="card-content">
                    <span className="title">
                    <Typography variant="h5" component="span" className="text-red">
                        logo placeholder
                    </Typography>
                    </span>
                        <span className="text-block">
                    <Typography component="span">5 view</Typography> | {" "}
                            <Typography component="span">1 year ago</Typography>
                    <Button><GroupOutlinedIcon onClick={handleOpen} color="primary"/></Button>
                    </span>
                    </CardContent>
                </Card>
            </Box>
        </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
               <SocialModel/>
            </Modal>
            </>
    );
};

export default PostModel;