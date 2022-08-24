import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
    Button, Stack, IconButton
} from "@mui/material";
import navbarStyle from "../../configs/styles/Navbar.json"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountMenu from "./AccountMenu";


const theme = createTheme({
    palette: {
        primary: {
            main: "#673ab7",
        }
    },
});


const RightMenu = ({ classes }) => {

    return (
        <div>
            <ThemeProvider theme={theme} >
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" className={classes.loginButton} style={navbarStyle.loginButton}><b>Log In</b></Button>
                    <Button variant="contained" className={classes.signUpButton} style={navbarStyle.signUpButton}><b>Sign Up</b></Button>
                    {/* <IconButton endIcon={<KeyboardArrowDownIcon />} onClick={handleUserOptions}>
                        <PersonOutlineOutlinedIcon />
                    </IconButton> */}
                    <AccountMenu />

                </Stack>
            </ThemeProvider>
        </div>

    )
}

export default RightMenu;