import React, { RefObject, useEffect, useRef, useState } from "react";
import About from "../pages/about"
import Home from "../pages/home"
import Projects from "../pages/projects"
import optionstyles from '../css/options.module.css'
import classnames from "classnames";


function navigateToAnchor(anchor: string) {
  const anchorTargetElement = document.querySelector(`#${anchor}`)
  anchorTargetElement && anchorTargetElement.scrollIntoView({
    behavior: 'smooth', // smooth scroll
    block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
  })

  // Set anchor in url without directly moving
  history.pushState({}, "", `#${anchor}`)
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
      className={classnames(optionstyles.navbarIcon, {
        [optionstyles.isActive]: props.isActive
      })}
      onClick={()=>{navigateToAnchor('home')}}
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
  return <li className={classnames(optionstyles.navbarOption2, {
    [optionstyles.isActive]: props.isActive
  })}>
    <button
      onClick={() => {navigateToAnchor(props.anchor)}}
      className={optionstyles.navbarOptionText}
    >
      <span>{props.element}</span>
    </button>
  </li>
}

type NavbarProps = {
  // sections: Array<Section>;
  children: React.ReactNode
}
const NavigationBar = (props: NavbarProps) => {
  return <ul className={optionstyles.navbarOptions2}>
    {props.children}
  </ul>
}

const useIntersection = (element: RefObject<HTMLDivElement>) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              setState(entry.isIntersecting);
          }, {threshold: 0.5}
      );

      element && element.current && observer.observe(element.current);

      return () => {element && element.current && observer.unobserve(element.current)};
  }, []);

  return isVisible;
};

type SectionProps = {
  children: React.ReactNode;
  intersectionRef: RefObject<HTMLDivElement>;

}
const Section = (props: SectionProps) => {
  return <div
    ref={props.intersectionRef}
    style={{
      height: '100vh'
    }}
  >
    {props.children}
  </div>
}

const homeIcon = (
  <span>
    EH
    <span className={optionstyles.orange}>.</span>
  </span>
)


export const App = () => {
  // TODO put this and useIntersection call in function
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const inViewport = useIntersection(homeRef);
  const aboutInViewport = useIntersection(aboutRef);

  // TODO make it so that always one is active

  return <>
    <NavigationBar>
      <NavbarIcon isActive={inViewport} element={homeIcon} anchor={'home'}/>
      <NavbarOption isActive={aboutInViewport} element={'About'} anchor={'about'}/>
      {/* <NavbarOption isActive={false} element={'Projects'} anchor={'projects'}/> */}
    </NavigationBar>

    <Section intersectionRef={homeRef}>
      <Home />
    </Section>
    <Section intersectionRef={aboutRef}>
      <About />
    </Section>
  </>
};