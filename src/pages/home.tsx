import React from "react";
import HomepageMenu from '../components/options'
import styles from '../css/home.module.css'

const Title = () => {
    return <div className={styles.titleContainer}>
        <div className={styles.titleTop}>Hello! I'm...</div>
        <div className={styles.title}>Ed Hockedy.</div>
    </div>
}

const Title2 = () => {
    return <div className={styles.titleContainer}>
        <div className={styles.titleTop}>Hello!</div>
        <div className={styles.titleMid}>My name is</div>
        <div className={styles.titleName}>Ed Hockedy</div>
        <div className={styles.subtitle}>and I love to make things. Click below to learn more.</div>
    </div>
}

const Home = () => {
    return <div className={styles.centralCol}>
            <Title2 />
            <HomepageMenu />
    </div>
}

export default Home
