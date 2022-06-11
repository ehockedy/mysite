import React from "react";
import { Link, To } from "react-router-dom";
import styles from '../css/options.module.css'

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

export default Options