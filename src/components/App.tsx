import * as React from "react";
import styles from '../css/title.module.css'

function Title() {
  return <div className={styles.title}>
    Ed Hockedy.
  </div>
}

export const App = () => (
  <div className={styles.centralCol}>
    <Title />
  </div>
);