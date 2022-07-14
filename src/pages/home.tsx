import classNames from "classnames";
import React, { useState } from "react";
import { Link, To } from "react-router-dom";
import styles from '../css/home.module.css'
import * as pageoptions from '../data/pageOptions'

type SubtitleMessage = {
    message: string,
    fontSize: number, // in px
}

const initialMessage: SubtitleMessage = {
    message: "I'm a software engineer who likes to make fun stuff.",
    fontSize: 24
}

const starterSubtitleMessages: Array<SubtitleMessage> = [
    {
        message: "The dumping ground for all the stuff I make",
        fontSize: 28
    },
    initialMessage,
]

const subtitleMessages: Array<SubtitleMessage> = starterSubtitleMessages.concat([
    {
        message: "You found the secret hidden message (or did you?)",
        fontSize: 28
    },
    {
        message: "Time flies like an arrow. Fruit flies like a banana.",
        fontSize: 28
    }
])

const getRandomElement = (array: Array<SubtitleMessage>) => {
    return array[Math.floor(Math.random() * array.length)];
}
const getUniqueRandomElement = (array: Array<SubtitleMessage>, currentElement: SubtitleMessage) => {
    if (array.length === 1) { return array[0] }

    let nextElement = currentElement;
    while (nextElement === currentElement) {
        nextElement = getRandomElement(array);
    }
    return nextElement;
}

type OptionProps = {
    // Page to route to
    route: To,
    // Content to render on the option
    children: React.ReactNode,
}
// Option used in the homepage menu
const Option = (props: OptionProps) => {
    return <Link to={props.route}>
        <button className={classNames(styles.option, styles.clickable)}>
            {props.children}
        </button>
    </Link>
}

// I'm not sure I want this feature on at the moment, but leaving a switch here in case I change my mind
const messageGeneratorEnabled = false;

const Home = () => {
    const [subtitleMessage, setSubtitleMessage] = useState(messageGeneratorEnabled ? getRandomElement(starterSubtitleMessages) : initialMessage);

    // Use setState hook thing to store current message
    return <div className={styles.central}>
        <div className={classNames(styles.centralText, styles.centralContentRow)}>
            <div className={styles.title}>EdwardHockedy<span className={styles.orange}>.</span>dev</div>
            {messageGeneratorEnabled ?
                <button
                    className={classNames(styles.clickable, styles.subtitle)}
                    style={{fontSize: `${subtitleMessage.fontSize}px` }}
                    onClick={()=>{setSubtitleMessage(getUniqueRandomElement(subtitleMessages, subtitleMessage))}}
                >
                    {subtitleMessage.message}
                </button> :
                <div
                    className={styles.subtitle}
                    style={{fontSize: `${subtitleMessage.fontSize}px` }}
                >
                    {subtitleMessage.message}
                </div>
            }
        </div>
        <div className={classNames(styles.options, styles.centralContentRow)}>
            <Option route={pageoptions.ABOUT.route}>
                Things about me
            </Option>
            <Option route={pageoptions.PROJECTS.route}>
                Things I've made
            </Option>
        </div>
    </div>
}

export default Home;
