import React from "react";
import "./App.css";
import Header from "./component/header";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import { Route, Switch } from "react-router-dom";
import Gakketemu from "./pages/gaketemu";
import Footer from "./component/footer"

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <section className="section1">
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route path="/*" component={Gakketemu} />  
          </Switch>
          <Footer/>
        </section>
      </div>
    );
  }
}

export default App;
