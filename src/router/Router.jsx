import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { Page1Route } from "./Page1Route";
import { Page2Route } from "./Page2Route";

export const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {Page1Route.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        ></Route>
      </Switch>
      <Switch>
        <Route
          path="/page2"
          render={({ match: { url } }) => (
            <Switch>
              {Page2Route.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        ></Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};
