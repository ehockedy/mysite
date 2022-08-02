import * as React from "react";
import styles from '../css/page.module.css'

export type PageProps = {
    // The anchor used to navigate via navbar
    anchor: string;
}

type PageTitleProps = {
    // Text to display in the in tle
    value: string;
}

// Title for each page, with styled orange full stop at the end
export const PageTitle = (props: PageTitleProps) => {
    return <h1 className={styles.title}>
        {props.value}<span className={styles.orange}>.</span>
    </h1>
}