import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";

import ProjectList from "../projects/ProjectList";
import Notification from "./Notification";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
          <Grid container spacing={10}>
            <Grid item md={6} xs={12}>
              <ProjectList />
            </Grid>
            <Grid item md={6} xs={12}>
              <Notification />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
