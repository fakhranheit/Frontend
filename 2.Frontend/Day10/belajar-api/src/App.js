import React, { Component } from "react";
import Header from "./components/header";
import Home from "./pages/home";
import "./App.css";
import Axios from "axios";
import { APIURL } from "./support/apiURL";
import { connect } from "react-redux";
import {tokenActions} from './redux/actions'
class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    Axios.get(`${APIURL}/poe`)
      .then(res => {
        this.props.tokenActions(res.data.token);
        this.setState({loading:false})
      })
      .catch(err => {});
  }

  render() {
    if (this.state.loading) {
      return(
      <div>
        loading...
      </div>
      )
    }
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default connect(null, { tokenActions })(App);
