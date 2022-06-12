import React from "react";
import { Outlet, Link, To } from "react-router-dom";
import optionstyles from '../css/options.module.css'
import styles from '../css/layout.module.css'
import * as pageoptions from '../data/pageOptions'
import classnames from "classnames"

type SidebarMenuOptionProps = {
  // Page to route to
  route: To,
  // Icon to render next to option. When sidebar closed only this is displayed.
  icon: React.ReactNode,
  // Content to render on the option
  children: React.ReactNode,
}

// Option used in the homepage menu
const SidebarMenuOption = (props: SidebarMenuOptionProps) => {
  return <li className={classnames(optionstyles.option, styles.optionSidebar)}>
      <Link to={props.route}>
        <div className={styles.optionSidebarIcon}>{props.icon}</div>
        <div className={styles.optionSidebarText}>{props.children}</div>
      </Link>
  </li>
}

// Define the options that will be appearing in the home page menu
const pageOptions: Array<pageoptions.Option> = [
  pageoptions.HOME,
  pageoptions.ABOUT,
  pageoptions.PROJECTS,
  pageoptions.CV,
  pageoptions.CONTACT,
]

const SidebarMenu = () => {
  return <ul className={classnames(optionstyles.options, styles.optionsSidebar)}>
      {pageOptions.map(
          (option: pageoptions.Option) =>
            <SidebarMenuOption
              route={option.route}
              icon={option.icon}
              key={option.name}
            >
              {option.name}
            </SidebarMenuOption>
      )}
  </ul>
}

const Layout = () => {
    return <>
      <div className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            EH
          </div>
        </div>
        <SidebarMenu/>
      </div>
      <div className={styles.centralCol}>
        <Outlet />
      </div>
    </>
  }

export default Layout