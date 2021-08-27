import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Typography, Link, Avatar, Box, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import useStyles from "./style/NavStyle";

import NoteAddIcon from "@material-ui/icons/NoteAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const DesktopSignInLInk = () => {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Typography>
        <Link component={RouterLink} to="/create-project" color="inherit" className={classes.navbarLink}>
          New Project
        </Link>
        <Link component={RouterLink} to="/login" color="inherit" className={classes.navbarLink}>
          Logout
        </Link>
      </Typography>
      <Avatar src="/broken-image.jpg" />
    </Box>
  );
};

const MobileSignInLInk = React.forwardRef(() => {
  const classes = useStyles();
  return (
    <List component="nav" aria-label="main mailbox folders" className={classes.drawerWidth}>
      <ListItem button component={RouterLink} to="/create-project">
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <ListItemText primary="New Project" />
      </ListItem>
      <ListItem button component={RouterLink} to="/login">
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );
});

export { DesktopSignInLInk, MobileSignInLInk };
