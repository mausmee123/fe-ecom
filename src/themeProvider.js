import React from 'react';
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#007FFF",
        },
        secondary: {
            main: "#00D037",
        },
        error: {
            main: "#C32525",
        },
}
});

const GlobalThemeProvider = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
};

export default GlobalThemeProvider;