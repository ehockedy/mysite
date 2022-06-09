import React from "react";
import { Link, To } from "react-router-dom";
import styles from '../css/title.module.css'

const Title = () => {
    return <div className={styles.titleContainer}>
        <div className={styles.titleTop}>Hello! I'm...</div>
        <div className={styles.title}>Ed Hockedy.</div>
    </div>
}

type OptionProps = {
    route: To,
    children: React.ReactNode,
}

const Option = (props: OptionProps) => {
    return <li className={styles.option}>
        <Link to={props.route}>{props.children}</Link>
    </li>
}

const Options = () => {
    return <ul className={styles.options}>
        <Option route="/about">About.</Option>
        <Option route="/projects">Projects.</Option>
        <Option route="/">CV.</Option>
        <Option route="/">Contact.</Option>
    </ul>
}

const Home = () => {
    return <div className={styles.centralCol}>
        <Title />
        <Options />
    </div>
}

export default Home
