import React, { RefObject, useEffect, useRef, useState } from "react";
import About from "../pages/about"
import Home from "../pages/home"
import { NavbarIcon, NavbarOption, NavigationBar } from "./navigation";
import optionstyles from '../css/options.module.css'

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
    </NavigationBar>

    <Section intersectionRef={homeRef}>
      <Home />
    </Section>
    <Section intersectionRef={aboutRef}>
      <About />
    </Section>
  </>
};