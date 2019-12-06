import React from "react";
import Header from "./components/header";
import "./App.css";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import ManageAdmin from './pages/manageAdmin'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={'/'} exact>
          <Home />
        </Route>
        <Route path={'/manageAdmin'} exact>
          <ManageAdmin/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
