import React, { Component } from "react";

import { Paper, TextField, Container, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  fromRoot: {
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 1),
    },
  },
  inputFild: {
    width: "100%",
    margin: theme.spacing(3, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1, 0),
    },
  },
  fromSpace: {
    margin: theme.spacing(3),
  },
  fromHeader: {
    padding: theme.spacing(0, 3),
    fontWeight: 500,
  },
  submitBtn: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1, 2),
    fontSize: "1rem",
  },
});

export class SignIn extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "2rem" }}>
        <Container maxWidth="md">
          <Paper className={classes.fromRoot}>
            <Typography variant="h4" className={classes.fromHeader}>
              Login
            </Typography>
            <form className={classes.fromSpace}>
              <TextField id="standard-basic" label="Your Email" className={classes.inputFild} />
              <TextField id="standard-basic" label="Password" className={classes.inputFild} />
              <Button variant="contained" color="primary" disableElevation className={classes.submitBtn}>
                Submit
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(SignIn);
