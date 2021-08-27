import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link, Box, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import useStyles from "./style/NavStyle";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const DesktopSignOutLInk = () => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Typography>
        <Link component={RouterLink} to="/login" color="inherit" href="#" className={classes.navbarLink}>
          Login
        </Link>
        <Link component={RouterLink} to="/signup" color="inherit" className={classes.navbarLink}>
          Sign up
        </Link>
      </Typography>
    </Box>
  );
};

const MobileSignOutLInk = React.forwardRef(() => {
  const classes = useStyles();
  return (
    <List component="nav" aria-label="main mailbox folders" className={classes.drawerWidth}>
      <ListItem button component={RouterLink} to="/login">
        <ListItemIcon>
          <LockOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItem>
      <ListItem button component={RouterLink} to="/signup">
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Sign up" />
      </ListItem>
    </List>
  );
});

export { DesktopSignOutLInk, MobileSignOutLInk };
