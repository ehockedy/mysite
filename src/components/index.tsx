import * as React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import "@fontsource/gloria-hallelujah"
import '../css/index.css'

const container = document.getElementById('app')
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}