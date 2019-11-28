import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import Container from "./components/container";
import Loading from "./components/loading";

class App extends Component {
  state = {
    stnk: [],
    loading: true,
    angka: 0
  };

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        stnk: [
          { nama: "Bobi", kendaraan: "ambulan", warna: "hotpink" },
          { nama: "Dzaky", kendaraan: "MRT", warna: "orange kayak shopee" },
          { nama: "Anya", kendaraan: "busway", warna: "ungu" }
        ]
      });
      this.setState({ loading: false });
    }, 3000);
  }

  tambahAngkaonclick = a => {
    this.setState(prevstate => {
      return {
        angka: prevstate.angka + a
      };
    });
  };

  render() {
    console.log("masuk render apps.js");
    const { loading, stnk } = this.state;
    if (loading) {
      return (
        <div>
          {" "}
          <Loading />
        </div>
      );
    }
    return (
      <div>
        <Header namauser={"Fakhran"} />
        <Content stnk1={stnk} tambahangka={this.tambahAngkaonclick} />
        <Container>
          <div className="tengah">{this.state.angka}</div>
        </Container>
      </div>
    );
  }
}

export default App;
