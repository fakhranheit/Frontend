import React, { Component } from "react";
import Jumbotron1 from "./../component/jumbotron1";
import Logo from "./../component/logo";
import Menukanan1 from '../component/menukanan1'
import Menukiri1 from "../component/menukiri1";
import Menukanan2 from "../component/menukanan2";
import Menukiri2 from "../component/menukiri2"


class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        
        <Jumbotron1 />
        <Logo />
        <Menukanan1/>
        <Menukiri1/>
        <Menukanan2/>
        <Menukiri2/>
     
      </div>
    );
  }
}

export default Homepage;
