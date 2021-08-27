import React, { Component } from "react";
import { Card, CardContent, Typography, Container } from "@material-ui/core";

export class ProjectDetails extends Component {
  render() {
    return (
      <Container maxWidth="md" style={{ marginTop: "3rem" }}>
        <Card style={{ padding: "2rem 1rem" }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Here is your project Title
            </Typography>
            <Typography color="textSecondary">2 Sept 2021</Typography>
            <Typography color="textSecondary" gutterBottom>
              Created By Tawheed
            </Typography>
            <Typography variant="body1" gutterBottom style={{ marginTop: "1.2rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default ProjectDetails;
