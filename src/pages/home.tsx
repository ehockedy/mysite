import classNames from "classnames";
import React from "react";
import styles from '../css/home.module.css'

const Home = () => {
    return <div className={styles.central}>
        <div className={classNames(styles.centralText, styles.centralContentRow)}>
            <div className={styles.title}>EdwardHockedy<span className={styles.orange}>.</span>dev</div>
            <div className={styles.subtitle} style={{fontSize: '28px' }}>I'm a software engineer who likes to build things</div>
        </div>
        <div className={classNames(styles.options, styles.centralContentRow)}>
            <div>Things about me</div>
            <div>Things I've made</div>
        </div>
    </div>
}

export default Home;
