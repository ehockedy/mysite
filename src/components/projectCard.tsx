import React from "react";
import testImg from "../assets/test.jpg"
import dokvCardImg from "../assets/dokv_card.png"
import styles from "../css/projectCard.module.css"
import classnames from "classnames"

type ProjectCardBackProps = {
    children: React.ReactNode;
    dateRange: string;
    link: string;
}
const ProjectCardBack = (props: ProjectCardBackProps) => {
    return <>
        <div className={styles.dates}>
            {props.dateRange}
        </div>
        <div className={styles.info}>
            {props.children}
        </div>
        <a className={styles.link} href={props.link}>
            Go to site
        </a>
    </>
}

const ProjectCard = () => {
    return <div className={styles.cardOuter}>
        <div className={styles.cardInner}>
            <div className={classnames(styles.background, styles.cardFront)}
                style={{
                    backgroundImage: `url(${dokvCardImg})`
                }}
            >
                <div className={styles.nameBanner}>
                    <div className={styles.projectName}>
                        Defence of Karragarra Valley
                    </div>
                    <div className={styles.projectDescriptionShort}>
                        Multiplayer tower defence game
                    </div>
                </div>
            </div>
            <div className={classnames(styles.background, styles.cardBack)}>
                <ProjectCardBack dateRange="Jun 2020 - Apr 2022" link="https://google.com">
                    After playing multiple online browser games at the start of the pandemic, I decide to 
                    revisit an old favourite - Bloons Tower Defence. As I revelled in nostlagia, a thought struck me: what if I could play 
                    this with friends? I searched, but could not find any multiplayer tower defence games. On top of an existing desire to make a multiplayer
                    web app, I began this project. The more I developed, the more I
                    enjoyed planning the mechanics, creating the sprites, and balancing the game. As such, the project lasted far longer than I ever intended,
                    and even became a bit of a burden towards the end. Even so, I'm proud to have completed the first cooperative and colaborative
                    tower defence game that I have ever played.
                </ProjectCardBack>
            </div>
        </div>
    </div>
}

export default ProjectCard