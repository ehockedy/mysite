import * as React from "react";
import { PageProps } from "../components/page";
import ProjectCard from "../components/projectCard"
import styles from "../css/projects.module.css"

const Projects = (props: PageProps) => {
  return <div id={props.anchor}>
      <h1>Projects.</h1>
      <div className={styles.projectCardContainer}>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
};

export default Projects;
