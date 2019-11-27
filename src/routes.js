import React from "react";
import { Route } from "react-router-dom";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Register from "./components/Register";

const BaseRouter = () => (
  <div>
    <Route exact path="/posts" component={Posts} />{" "}
    <Route exact path="/" component={Login} />{" "}
    <Route exact path="/register" component={Register} />{" "}
  </div>
);

export default BaseRouter;
