import React, { Component } from "react";

import ProjectSummary from "./ProjectSummary";

export class ProjectList extends Component {
  render() {
    return (
      <div>
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
      </div>
    );
  }
}

export default ProjectList;
