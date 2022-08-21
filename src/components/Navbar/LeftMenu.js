import {
    Typography
} from "@mui/material";
import React from "react";

const LeftMenu = ({ classes }) => {
    return (
        <React.Fragment>
            <Typography variant="h6" className={classes.brand}>
                GenzBlogz
            </Typography>
        </React.Fragment>
    )
}

export default LeftMenu;