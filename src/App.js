import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./store";
import {Dashboard} from "./containers/Dashboard";

function App() {

  return (
      <Provider store={store}>
        <div className="dashboardContainer">
        <Dashboard/>
        </div>
      </Provider>
  );
}

export default App;
