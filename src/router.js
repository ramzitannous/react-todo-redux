import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Dashboard} from "./containers/Dashboard";

const routes = [
    {
        path: ["/dashboard", "/"],
        component: Dashboard
    },
    {
        path: "/remote",

    }

]
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(({path, component}) => (
                    <Route path={path} component={component} />
                ))}
            </Switch>
        </BrowserRouter>
    )
}