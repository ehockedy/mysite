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
    icon: <div>🏠</div>,
}

export const ABOUT: Option = {
    route: '/about',
    name: "About.",
    icon: <div>🙋‍♂️</div>,
}

export const PROJECTS: Option = {
    route: '/projects',
    name: "Projects.",
    icon: <div>💻</div>,
}

export const CV: Option = {
    route: '/',
    name: "CV.",
    icon: <div>📄</div>,
}

export const CONTACT: Option = {
    route: '/',
    name: "Contact.",
    icon: <div>📞</div>,
}
