import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Dashboard} from "./containers/Dashboard";
import {RemoteTodo} from "./containers/RemoteTodo";

const routes = [
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/remote",
        component: RemoteTodo

    }

]
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(({path, component}) => (
                    <Route path={path} component={component} key={path} />
                ))}
            </Switch>
        </BrowserRouter>
    )
}