// import React, { Suspense, useState, useCallback } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  // const [title, setTitle] = useState<string>()

  // const onChangeHeader = useCallback((title: string) => {
  //   setTitle(title)
  // }, [])

  return (
    <div className="App">
      <Grid container>Welcome to Malam candy store!</Grid>
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
