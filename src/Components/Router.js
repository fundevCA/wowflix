import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/search" component={Search} />
          <Route path="/tv" component={TV} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Router;