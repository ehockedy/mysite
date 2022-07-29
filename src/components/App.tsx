import React, { RefObject, useEffect, useRef, useState } from "react";
import About from "../pages/about"
import Home from "../pages/home"
import Projects from "../pages/projects"
import { NavbarIcon, NavbarOption, NavigationBar, HomeIcon } from "./navigation";


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
      height: '100vh',
      width: '80%',
      margin: '0 auto',
      marginBottom: '64px',
      minHeight: '600px',
    }}
  >
    {props.children}
  </div>
}

export const App = () => {

  // Once loaded, go to section present in hash if there. This lets a user directly
  // navigate to a section via url.
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const anchorTargetElement = document.querySelector(hash);
      if (anchorTargetElement) {
        anchorTargetElement.scrollIntoView();
      }
    }
  }, [])

  // TODO put this and useIntersection call in function
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const inViewport = useIntersection(homeRef);
  const aboutInViewport = useIntersection(aboutRef);
  const projectsInViewport = useIntersection(projectsRef);

  // TODO make it so that always one is active

  return <>
    <NavigationBar>
      <NavbarIcon isActive={inViewport} element={HomeIcon} anchor={'home'}/>
      <NavbarOption isActive={aboutInViewport} element={'About'} anchor={'about'}/>
      <NavbarOption isActive={projectsInViewport} element={'Projects'} anchor={'projects'}/>
    </NavigationBar>

    <Section intersectionRef={homeRef}>
      <Home anchor='home'/>
    </Section>
    <Section intersectionRef={aboutRef}>
      <About anchor='about'/>
    </Section>
    <Section intersectionRef={projectsRef}>
      <Projects anchor='projects'/>
    </Section>
  </>
};