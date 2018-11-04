import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
        projectItems = this.props.projects.map(pr => {
            //console.log(pr);
            return (
              <ProjectItem project = {pr} onDelete={this.deleteProject.bind(this)}></ProjectItem>
            );
        });
    }

    return (
      <div className="Projects">
      <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;