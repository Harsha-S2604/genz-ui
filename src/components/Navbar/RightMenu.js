import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
    Button, Stack, IconButton
} from "@mui/material";
import navbarStyle from "../../configs/styles/Navbar.json"


const theme = createTheme({
    palette: {
        primary: {
            main: "#673ab7",
        }
    },
});


const RightMenu = ({ classes }) => {

    const handleUserOptions = () => {
        console.log("Show");
    }

    return (
        <div>
            <ThemeProvider theme={theme} >
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" className={classes.loginButton} style={navbarStyle.loginButton}><b>Log In</b></Button>
                    <Button variant="contained" className={classes.signUpButton} style={navbarStyle.signUpButton}><b>Sign Up</b></Button>
                    <IconButton onClick={handleUserOptions}>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>

                </Stack>
            </ThemeProvider>
        </div>

    )
}

export default RightMenu;