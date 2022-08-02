import * as React from "react";
import { PageProps, PageTitle } from "../components/page";
import ProjectCard from "../components/projectCard"
import styles from "../css/projects.module.css"

const Projects = (props: PageProps) => {
  return <div id={props.anchor}>
      <PageTitle value="Projects"></PageTitle>
      <div className={styles.projectCardContainer}>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
};

export default Projects;
