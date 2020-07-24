import React from "react";
import {BrowserRouter, Route, Redirect} from "react-router-dom"
import {Dashboard} from "./containers/Dashboard";
import {RemoteTodo} from "./containers/RemoteTodo";
import {Login} from "./containers/Login";
import { useSelector } from "react-redux";

const routes = [
    {
        path: ["/dashboard", "/"],
        component: Dashboard,
        privateRoute: true
    },
    {
        path: "/remote",
        component: RemoteTodo,
        privateRoute: true
    },
    {
        path: "/login",
        component: Login,
        privateRoute: false
    }
]


export const AppRouterContainer = () => {
    const loggedIn = useSelector(state => state.login.loggedIn);

    return (
        <BrowserRouter>
                {routes.map(({path, component, privateRoute}, index) => {
                    const route = <Route exact key={`${path}-${index}`} path={path} component={component} />
                    if(!privateRoute || loggedIn) {
                        return route;
                    }
                    return <Redirect to={"login"} key={`${path}-${index}`}/>
                })}
        </BrowserRouter>
    )
}
