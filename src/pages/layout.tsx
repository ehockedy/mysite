import React from "react";
import { Outlet, Link, To } from "react-router-dom";
import optionstyles from '../css/options.module.css'
import styles from '../css/layout.module.css'
import * as pageoptions from '../data/pageOptions'
import type { Colour } from "../data/pageOptions";
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

type NavbarOptionProps = {
  // Page to route to
  route: To,
  // Content to render on the option
  children: React.ReactNode,
  // Colour when hovered
  colour: Colour,
}
const NavbarOption = (props: NavbarOptionProps) => {
  return <li className={classnames(optionstyles.navbarOption, {
    [optionstyles.red]: props.colour === 'red',
    [optionstyles.blue]: props.colour === 'blue',
    [optionstyles.yellow]: props.colour === 'yellow',
    [optionstyles.purple]: props.colour === 'purple'
  })}>
      <Link to={props.route}>
        <div className={optionstyles.navbarOptionText}>{props.children}</div>
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

const NavigationBar = () => {
  return <div className={optionstyles.navbarContainer}>
      <ul className={optionstyles.navbarOptions}>
        {pageOptions.map(
            (option: pageoptions.Option) =>
              <NavbarOption
                route={option.route}
                key={option.name}
                colour={option.colour}
              >
                {option.name}
              </NavbarOption>
        )}
    </ul>
    <div className={optionstyles.divider}></div>
  </div>
}

const Layout = () => {
    return <>
      <div className={styles.navbar}>
        {/* <div className={styles.logoContainer}>
          <div className={styles.logo}>
            EH
          </div>
        </div> */}
        {/* <SidebarMenu/> */}
        <NavigationBar/>
      </div>
      <div className={styles.centralCol}>
        <Outlet />
      </div>
    </>
  }

export default Layout