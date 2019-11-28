import React from "react";

class Coba extends React.Component {
  state = {
    nama: "firdaus",
    angka: 0,
    umur: 12,
    mobil: ["avanza", "grabwheel", "ambulan", "tank"]
  };
  componentDidMount() {
    console.log("masuk mount");
    var angka = this.state.angka + "1";
    console.log(this.state.angka);
    this.setState({ angka });
    console.log(this.state.angka);
    // console.log(angka);
  }

  onTambahClick = () => {
    var angkaBaru = this.state.angka + 1;
    this.setState({ angka: angkaBaru });
  };

  onKurangClick = () => {
    this.setState(({ angka }) => {
      var newAngka = angka - 1;
      if (newAngka < 0) {
        return {
          angka: 0
        };
      }
      return {
        angka: angka - 1
      };
    });
  };

  render() {
    console.log("masuk render");
    if (this.state.angka != "") {
      return (
        <center>
          <div>
            {this.state.angka}
            <br />
            {this.state.umur}
          </div>
          {this.state.angka}
          <br />
          <button onClick={this.onTambahClick}>+</button>
          <button onClick={this.onKurangClick}>-</button>
        </center>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}
export default Coba;
