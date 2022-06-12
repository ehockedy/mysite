import React from "react";
import { To } from "react-router-dom";

/**
 * List of available pages that can be used to define the links in navigation components
 */

export type Option = {
    // Page to route to
    route: To,
    // Name of the page
    name: String,
    // Icon assiciated with the option
    icon: React.ReactNode,
}

export const HOME: Option = {
    route: '/',
    name: "Home.",
    icon: <span>H</span>,
}

export const ABOUT: Option = {
    route: '/about',
    name: "About.",
    icon: <span>A</span>,
}

export const PROJECTS: Option = {
    route: '/projects',
    name: "Projects.",
    icon: <span>P</span>,
}

export const CV: Option = {
    route: '/',
    name: "CV.",
    icon: <span>V</span>,
}

export const CONTACT: Option = {
    route: '/',
    name: "Contact.",
    icon: <span>C</span>,
}
