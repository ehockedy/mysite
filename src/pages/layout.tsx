import React from "react";
import { Outlet } from "react-router-dom";
import styles from '../css/layout.module.css'

const Layout = () => {
    return <>
      <div className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            EH
          </div>
        </div>
      </div>
      <div className={styles.centralCol}>
        <Outlet />
      </div>
    </>
  }

export default Layout