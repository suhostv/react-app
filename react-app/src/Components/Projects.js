import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
  

  render() {
    let projectItems;
    if (this.props.projects) {
        projectItems = this.props.projects.map(pr => {
            //console.log(pr);
            return (
              <ProjectItem project = {pr}></ProjectItem>
            );
        });
    }

    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;