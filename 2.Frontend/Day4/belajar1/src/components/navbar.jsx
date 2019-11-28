import React from "react";

class Navbar extends React.Component {
  state = {
    nama: "fakhran",
    angka: 0,
    umur: 12,
    mobil: ["avanza", "grabwheel", "ambulan", "tank"]
  };
  componentDidMount() {
    console.log("masuk mount");
    var nama = this.state.nama + "1";
    console.log(this.state.nama);
    this.setState({ nama });
    console.log(this.state.nama);
    console.log(nama);
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
    if (this.state.nama != "") {
      return (
        <center>
          <div>
            {this.state.nama}
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
export default Navbar;
