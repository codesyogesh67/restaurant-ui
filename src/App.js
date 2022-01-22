import React from "react";
import "./App.css";

import {
  Hero,
  Section,
  Services,
  Foods,
  DownloadApp,
  EmailNotification,
} from "./containers";

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Foods />
      <DownloadApp />
      <EmailNotification />
    </div>
  );
}

export default App;
