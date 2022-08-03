import React from "react";
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

export type ProjectCardProps = {
    projectName: string;
    projectSubtitle: string;
    backgroundImage: string;
    aboutText: string;
    dateRange: string;
    link: string;
}
const ProjectCard = (props: ProjectCardProps) => {
    return <div className={styles.cardOuter}>
        <div className={styles.cardInner}>
            <div className={classnames(styles.background, styles.cardFront)}
                style={{
                    backgroundImage: `url(${props.backgroundImage})`
                }}
            >
                <div className={styles.nameBanner}>
                    <div className={styles.projectName}>
                        {props.projectName}
                    </div>
                    <div className={styles.projectDescriptionShort}>
                        {props.projectSubtitle}
                    </div>
                </div>
            </div>
            <div className={classnames(styles.background, styles.cardBack)}>
                <ProjectCardBack dateRange={props.dateRange} link={props.link}>
                    {props.aboutText}
                </ProjectCardBack>
            </div>
        </div>
    </div>
}

export default ProjectCard