import React from "react";
import HomepageMenu from '../components/options'
import styles from '../css/home.module.css'

const Title = () => {
    return <div className={styles.titleContainer}>
        <div className={styles.titleTop}>Hello! I'm...</div>
        <div className={styles.title}>Ed Hockedy.</div>
    </div>
}

const Home = () => {
    return <>
        <Title />
        <HomepageMenu />
    </>
}

export default Home
