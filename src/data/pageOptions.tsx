import React from "react";
import { To } from "react-router-dom";

export type Colour = 'red' | 'blue' | 'yellow' | 'purple';

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
    // Colour associated with the option
    colour: Colour,
}

export const HOME: Option = {
    route: '/',
    name: "Home.",
    icon: <div>🏠</div>,
    colour: 'purple'
}

export const ABOUT: Option = {
    route: '/about',
    name: "About.",
    icon: <div>🙋‍♂️</div>,
    colour: 'red',
}

export const PROJECTS: Option = {
    route: '/projects',
    name: "Projects.",
    icon: <div>💻</div>,
    colour: 'blue',
}

export const CV: Option = {
    route: '/',
    name: "CV.",
    icon: <div>📄</div>,
    colour: 'yellow',
}

export const CONTACT: Option = {
    route: '/',
    name: "Contact.",
    icon: <div>📞</div>,
    colour: 'yellow',
}
