import * as React from "react";
import ProjectCard from "../components/projectCard"
import pageStyles from "../css/page.module.css"
import styles from "../css/projects.module.css"

const Projects = () => {
    return <>
      <h1 className={pageStyles.title}>Projects.</h1>
      <div className={styles.projectCardContainer}>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </>;
};

export default Projects;
