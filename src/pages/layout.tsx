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
  return <li className={classnames(optionstyles.navbarOption)}>
      <Link to={props.route}>
        <div className={optionstyles.navbarOptionText}>{props.children}</div>
      </Link>
  </li>
}

type NavbarOptionProps2 = {
  // Section to link to
  anchor: string
  // Content to render on the option
  element: React.ReactNode,
  // Whether user is on this section
  isActive: boolean,
}
export const NavbarOption2 = (props: NavbarOptionProps2) => {
  return <li className={classnames(optionstyles.navbarOption2, {
    [optionstyles.isActive]: props.isActive
  })}>
    <button
      onClick={(e) => {
        const anchorTargetElement = document.querySelector(`#${props.anchor}`)
        anchorTargetElement && anchorTargetElement.scrollIntoView({
          behavior: 'smooth', // smooth scroll
          block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
        })

        // Set anchor in url without directly moving
        history.pushState({}, "", `#${props.anchor}`)
      }}
      className={optionstyles.navbarOptionText}>
        <span>{props.element}</span>
    </button>
  </li>
}

// Define the options that will be appearing in the home page menu
const pageOptions: Array<pageoptions.Option> = [
  pageoptions.ABOUT,
  pageoptions.PROJECTS,
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

type NavbarProps = {
  pageOptions: Array<pageoptions.Option>;
}
export const NavigationBar2 = (props: NavbarProps) => {
  return <ul className={optionstyles.navbarOptions2}>
        <div>EH<span className={optionstyles.orange}>.</span></div>
        {props.pageOptions.map(
            (option: pageoptions.Option) =>
              <NavbarOption2
                anchor={option.anchorId}
                key={option.name}
              >
                {option.name}
              </NavbarOption2>
        )}
    </ul>
}

const Layout = () => {
    return <>
      {/* <div className={styles.navbar}></div> */}
        {/* <div className={styles.logoContainer}>
          <div className={styles.logo}>
            EH
          </div>
        </div> */}
        {/* <SidebarMenu/> */}
        <NavigationBar2/>
      {/* </div> */}
      {/* <div className={styles.centralCol}> */}
        <Outlet />
      {/* </div> */}
    </>
  }

export default Layout