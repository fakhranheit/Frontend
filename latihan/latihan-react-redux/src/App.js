import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddOrang from "./AddOrang";

class App extends Component {
  state = {
    dataManusia: [
      { name: "Fakhran", usia: 24, hobby: "gaming", id: 1 },
      { name: "wahyu", usia: 30, hobby: "tidur", id: 2 },
      { name: "firdaus", usia: 18, hobby: "nonton", id: 3 }
    ]
  };

  addManusia = (coba) => {
    coba.id = Math.random();
    let manusia = [...this.state.dataManusia, coba]
    this.setState({
      dataManusia: manusia
    })
    console.log(manusia)
  };

  render() {
    return (
      <div className="App">
        <h1> aplikasi react</h1>
        <p>selamat datang</p>
        <Ninjas dataManusia={this.state.dataManusia}></Ninjas> {/* pnama properti tidak perlu sama dengan nama variabel yang ingin di export */}
        <AddOrang addManusia={this.addManusia} />
      </div>
    );
  }
}

export default App;
