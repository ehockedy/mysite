import * as React from "react";
import me from "../assets/ed.png"
import styles from '../css/about.module.css'
import { PageProps, PageTitle } from "../components/page";
import classNames from "classnames";

// So that I don't have to update the age in the description, calculate my age
const getMyAge = () => {
    var today = new Date();
    var birthDate = new Date(1996, 3, 29);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Determine whether I have a wife or fiancee based on the wedding date
const marriageStatus = () => {
    var today = new Date();
    var weddingDate = new Date(2024, 4, 11);
    return today < weddingDate ? 'fiancée' : 'wife'
}

const About = (props: PageProps) => {
    return <div id={props.anchor} className={styles.about}>
        <PageTitle value="About me"></PageTitle>
        <div className={styles.mainContent}>
            <div className={styles.col}>
                <div className={styles.textContainer}>
                    <p>Hello! Welcome to my site, my name is Ed.</p>
                    <p>
                        I'm a {getMyAge()} year old software developer, currently living in Oxford, UK with my lovely {marriageStatus()} Rosie.
                        I grew up in Chester, and have previously lived in Guildford and also Durham, where I studied.
                    </p>
                    <p>
                        Don't consider this website a 'portfolio' as such. It's merely a place on the Internet I can call my own,
                        and a hub for all the random stuff I like to make. Making things is my passion (not only with code, I also
                        love to paint), so this is my way of showing off to the world what I love to do.
                    </p>
                    <p>
                        Thank you so much for reading, and please enjoy your look around!
                    </p>
                </div>
            </div>
            <div className={classNames(styles.col, styles.imageCol)}>
                <div className={styles.imageContainer}>
                    <img src={me} className={styles.myImage} />
                </div>
            </div>
        </div>
    </div>;
};

export default About;
