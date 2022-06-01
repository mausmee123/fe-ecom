import React from "react";
import TrendingSlider from "../components/TrendingSlider";
import PostSlider from "../components/PostSlider";
import CategorySlider from "../components/CategorySlider";
import {ThemeProvider} from "@material-ui/styles";
import {createTheme} from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: '#007FFF'
        },
        secondary: {
            main: '#11cb5f'
        }
    }
});
const TrendingPost = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
            <CategorySlider redcolor="red" greencolor="green" bluecolor="blue" yellowcolor="yellow"/>
            <PostSlider/>
            <TrendingSlider/>
            </ThemeProvider>
        </>
    );
};

export default TrendingPost;