import * as React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, To } from "react-router-dom";
import styles from '../css/title.module.css'
import About from "../pages/about"
import Projects from "../pages/projects"

function Title() {
  return <div className={styles.titleContainer}>
    <div className={styles.titleTop}>Hello! I'm...</div>
    <div className={styles.title}>Ed Hockedy.</div>
  </div>
}

type OptionProps = {
  route: To,
  children: React.ReactNode,
}

function Option(props: OptionProps) {
  return <li className={styles.option}>
      <Link to={props.route}>{props.children}</Link>
  </li>
}

function Options() {
  return <ul className={styles.options}>
    <Option route="/about">About.</Option>
    <Option route="/projects">Projects.</Option>
    <Option route="/">CV.</Option>
    <Option route="/">Contact.</Option>
  </ul>
}

const Home = () => {
  return <div className={styles.centralCol}>
    <Title />
    <Options />
  </div>
}

const Layout = () => {
  return <div>
    Layout
    <Outlet />
  </div>
}

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);