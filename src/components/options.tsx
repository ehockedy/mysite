import React from "react";
import { Link, To } from "react-router-dom";
import styles from '../css/options.module.css'
import * as pageoptions from '../data/pageOptions'

type OptionProps = {
    // Page to route to
    route: To,
    // Content to render on the option
    children: React.ReactNode,
}

// Option used in the homepage menu
const Option = (props: OptionProps) => {
    return <li className={styles.option}>
        <Link to={props.route}>
            {props.children}
        </Link>
    </li>
}

// Define the options that will be appearing in the home page menu
const pageOptions: Array<pageoptions.Option> = [
    pageoptions.ABOUT,
    pageoptions.PROJECTS,
    // pageoptions.CV,
    // pageoptions.CONTACT,
]

// Homepage menu options
const HomepageMenu = () => {
    return <ul className={styles.options}>
        {pageOptions.map(
            (option: pageoptions.Option) =>
                <Option
                    route={option.route}
                    key={option.name}
                >
                    {option.name}
                </Option>
        )}
    </ul>
}

export default HomepageMenu