import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
