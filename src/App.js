import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./store";
import {AppRouterContainer} from "./router";

function App() {

  return (
      <Provider store={store}>
        <div className="dashboardContainer">
        <AppRouterContainer/>
        </div>
      </Provider>
  );
}

export default App;
