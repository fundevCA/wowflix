import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("../Routes/Home"));
const Detail = loadable(() => import("../Routes/Detail"));
const Search = loadable(() => import("../Routes/Search"));
const TV = loadable(() => import("../Routes/TV"));
const Header = loadable(() => import("./Header"));
const Collection = loadable(() => import("../Routes/Collection"));

const Router = () => {
  return (
    <HashRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/tv" exact component={TV} />
          <Route path="/tv/:id" component={Detail} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/collection/:id" component={Collection} />
        </Switch>
      </>
    </HashRouter>
  );
};

export default Router;
