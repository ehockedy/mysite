import React from "react";
import classnames from "classnames";
import style from '../css/navigation.module.css'


// Given an anchor string, if an element with that id exists, the page is scrolled to that section
// and the URL is updated
function navigateToAnchor(anchor: string) {
    const anchorTargetElement = document.querySelector(`#${anchor}`)
    if (anchorTargetElement) {
        anchorTargetElement.scrollIntoView({
            behavior: 'smooth', // smooth scroll
            block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
        })

        // Set anchor in url without directly moving
        history.pushState({}, "", `#${anchor}`)
    }
}

type NavbarIconProps = {
    // Section to link to
    anchor: string
    // Content to render on the option
    element: React.ReactNode,
    // Whether user is on this section
    isActive: boolean,
}
const NavbarIcon = (props: NavbarIconProps) => {
    return <li>
        <button
            className={classnames(style.navbarIcon, {
                [style.isActive]: props.isActive
            })}
            onClick={() => { navigateToAnchor(props.anchor) }}
        >
            {props.element}
        </button>

    </li>
}


type NavbarOptionProps = {
    // Section to link to
    anchor: string
    // Content to render on the option
    element: React.ReactNode,
    // Whether user is on this section
    isActive: boolean,
}
const NavbarOption = (props: NavbarOptionProps) => {
    return <li className={classnames(style.navbarOption, {
        [style.isActive]: props.isActive
    })}>
        <button
            onClick={() => { navigateToAnchor(props.anchor) }}
            className={style.navbarOptionText}
        >
            <span>{props.element}</span>
        </button>
    </li>
}


type NavbarProps = {
    children: React.ReactNode
}
const NavigationBar = (props: NavbarProps) => {
    return <ul className={style.navbar}>
        {props.children}
    </ul>
}

export {NavbarIcon, NavbarOption, NavigationBar};