import React from "react";
import testImg from "../assets/test.jpg"
import dokvCardImg from "../assets/dokv_card.png"
import styles from "../css/projectCard.module.css"
import classnames from "classnames"

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
            </div>
        </div>
    </div>
}

export default ProjectCard