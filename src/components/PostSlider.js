import React, {useState} from 'react';
import HomeLogo from "../assets/HomeLogo.jpg";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PostModel from "./PostModel";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Slider from "react-slick";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const dataPost = [
    { label: "logo placeholder", image: HomeLogo, view:"1", year:"1"},
    { label: "logo placeholder", image: HomeLogo, view:"2", year:"2"},
    { label: "logo placeholder", image: HomeLogo, view:"3", year:"3"},
    { label: "logo placeholder", image: HomeLogo, view:"4", year:"4"}
];


const PostSlider = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        className: "slides",
        prevArrow: <ChevronLeftOutlinedIcon />,
        nextArrow: <ChevronRightOutlinedIcon />,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 1.5}
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1}
            },
        ]
    };

    return (

        <div className="post-slider">
            <Typography className="title" variant="h5" color="secondary" component="div">
                Most Visited
            </Typography>

            <Slider {...settings}>
                {dataPost.map((item) => (
            <Card className="card-wrap">
                <CardMedia
                    component="img"
                    height="280"
                    src={item.image}
                    onClick={handleOpen}
                />
                <CardContent className="card-content">
                    <span className="title">
                    <Typography variant="h5" component="span" className="text-red">
                        {item.label}
                    </Typography>
                    </span>
                    <span className="text-block">
                    <Typography component="span">{item.view} view</Typography> | {" "}
                    <Typography component="span">{item.year} year ago</Typography>
                    <Button><GroupOutlinedIcon color="primary"/></Button>
                    </span>
                </CardContent>
            </Card>
                ))}
            </Slider>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <PostModel/>
            </Modal>
        </div>
    );
};

export default PostSlider;