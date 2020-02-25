import { hydrate, render } from "react-dom";
import App from './App';
import React from 'react';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}