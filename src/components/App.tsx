import * as React from "react";
import styles from '../css/title.module.css'

function Title() {
  return <div className={styles.titleContainer}>
    <div className={styles.titleTop}>Hello! I'm...</div>
    <div className={styles.title}>Ed Hockedy.</div>
  </div>
}

type OptionProps = {
  children: React.ReactNode,
}

function Option(props: OptionProps) {
  return <li className={styles.option}>
      {props.children}
  </li>
}

function Options() {
  return <ul className={styles.options}>
    <Option>About.</Option>
    <Option>Projects.</Option>
    <Option>CV.</Option>
    <Option>Contact.</Option>
  </ul>
}


export const App = () => (
  <div className={styles.centralCol}>
    <Title />
    <Options />
  </div>
);