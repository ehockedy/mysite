import * as React from "react";
import { PageProps, PageTitle } from "../components/page";
import ProjectCard, { ProjectCardProps } from "../components/projectCard"
import styles from "../css/projects.module.css"
import dokvCardImg from "../assets/dokv_card.png"

const projects: Array<ProjectCardProps> = [
  {
    projectName: 'Defence of Karragarra Valley',
    projectSubtitle: 'Multiplayer tower defence game',
    backgroundImage: dokvCardImg,
    aboutText: "After playing multiple online browser games at the start of the pandemic, \
      I decide to revisit an old favourite - Bloons Tower Defence. As I revelled in nostlagia,\
      a thought struck me: what if I could play this with friends? I searched, but could not \
      find any multiplayer tower defence games. On top of an existing desire to make a multiplayer \
      web app, I began this project. The more I developed, the more I enjoyed planning the \
      mechanics, creating the sprites, and balancing the game. As such, the project lasted far \
      longer than I ever intended, and even became a bit of a burden towards the end. Even so,\
      I'm proud to have completed the first cooperative and colaborative tower defence game that\
      I have ever played.",
    dateRange: 'Jun 2020 - Apr 2022',
    link: 'https://google.com'  // TODO update this when ready
  }
]

const Projects = (props: PageProps) => {
  return <div id={props.anchor}>
      <PageTitle value="Projects"></PageTitle>
      <div className={styles.projectCardContainer}>
        {projects.map((project, idx) => <ProjectCard {...project} key={`project${idx}`}/>)}
      </div>
    </div>
};

export default Projects;
