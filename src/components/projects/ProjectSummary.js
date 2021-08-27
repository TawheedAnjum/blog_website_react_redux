import React from "react";
import { Card, CardContent, CardActions, Button, Typography } from "@material-ui/core";

import useStyles from "./style/projectStyle";

function ShortProjectView() {
  const classes = useStyles();
  return (
    <Card className={classes.summaryRoot}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Project Title
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Posted By Tawheed
        </Typography>
        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ShortProjectView;
