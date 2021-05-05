import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { TopPage } from "./pages/top";
import { UserIndexPage } from "./pages/users";
import { UserShowPage } from "./pages/users/show";

const app = document.getElementById("app");

import App from "./App";
import { MapApp, MapAppResult, HandleApp } from "./App";

import {
  UseStateApp,
  UseEffectApp,
  TimerApp,
  UseMemoApp,
  UseCallbackApp,
  UseContextApp,
  UseRefApp,
  KeepApp,
  CustomHookApp,
  CustomHookApp2,
} from "./Hooktest";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Route exact path="/" component={TopPage}></Route>
      <Route exact path="/users" component={UserIndexPage}></Route>
      <Route exact path="/users/:userId" component={UserShowPage}></Route>
      <App />
      <MapApp />
      <MapAppResult />
      <HandleApp />

      <UseStateApp />
      <UseEffectApp />
      <TimerApp />
      <UseMemoApp />
      <UseCallbackApp />
      <UseContextApp />
      <UseRefApp />
      <KeepApp />

      <CustomHookApp />
      <CustomHookApp2 />
    </React.StrictMode>
  </BrowserRouter>,
  app
);
