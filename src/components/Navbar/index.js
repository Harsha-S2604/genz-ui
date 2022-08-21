import * as React from 'react';
import {
    AppBar, Toolbar, Typography, Box
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import navbarStyle from "../../configs/styles/Navbar.json"
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

/* color palette for navbar component, pass this variable
to ThemeProvider component */
const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
        }
    },
});

const useStyles = makeStyles(navbarStyle);


const Navbar = () => {

    const classes = useStyles();

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <LeftMenu classes={classes} />
                            <RightMenu classes={classes}/>
                        </Toolbar>
                    </AppBar>
                </Box>
                
            </ThemeProvider>
        </div>
    )
}

export default Navbar;