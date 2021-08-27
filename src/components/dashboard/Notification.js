import React from "react";

import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper, makeStyles, Typography } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 3),
  },
  header: {
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
}));

function Notification() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" gutterBottom className={classes.header}>
        Notifications
      </Typography>
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <NoteAddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="New Project Create by Tawheed" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <NoteAddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="New Project Create by Tawheed" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <NoteAddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="New Project Create by Tawheed" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <NoteAddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="New Project Create by Tawheed" secondary="Jan 9, 2014" />
        </ListItem>
      </List>
    </Paper>
  );
}

export default Notification;
