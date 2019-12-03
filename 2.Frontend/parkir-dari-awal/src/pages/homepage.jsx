import React, { Component } from "react";
import { Button, input } from "reactstrap";
import { connect } from "react-redux";
import { parkirMotor, parkirMobil } from "../redux/actions";

class Homepage extends Component {
  state = {
    // clickShow: 0,
    totalBayar: 0,
    kendaraan: "",
    durasi: 0
  };

  onClickMotor = () => {
    var durasiParkir = this.refs.jam.jam;
    this.setState({
      //   kendaraan: "Motor",
      clickShow: 1
    });
    this.props.parkirMotor(durasiParkir)
  };

  onClickMobil = () => {
    var durasiParkir = this.refs.jam.value;
    this.setState({
      //   kendaraan: "Mobil",
      clickShow: 2
    });
    this.props.parkirMobil(durasiParkir);
  };

  printTampilan = () => {
    var open = this.state.clickShow;

    if (open === 1) {
      return (
        <div>
          <input className="mx-auto mt-4" style={{ width: "300px" }} placeholder="masukkan durasi parkir" ref="jam"/>
          <p>Total Bayar,Rp.{this.props.totalBayar},00</p>
          <p>Motor Rp.3.000/jam</p>
          <Button onClick={this.onClickMobil} className="btn btn-danger mt-4">
            Bayar
          </Button>
        </div>
      );
    } else if (open === 2) {
      return (
        <div>
          <input className="mx-auto mt-4" style={{ width: "300px" }} placeholder="masukkan durasi parkir" ref="jam"/>
          <p>Total Bayar,Rp.{this.props.totalBayar},00</p>
          <p>Mobil Rp.10.000/jam</p>
          <Button onClick={this.onClickMotor} className="btn btn-danger mt-4">
            Bayar
          </Button>
        </div>
      );
    }
  };

//   onClickBayar = () => {
//     var totaljam = this.refs.jam.refs.innerDurasi.value;
//     var jeniskendaraan = this.state.clickShow;
//     if (jeniskendaraan === 1) {
//       this.setState({
//         durasi: totaljam,
//         totalBayar: totaljam * 3000
//       });
//     } else if (jeniskendaraan === 2) {
//       this.setState({
//         durasi: totaljam,
//         totalBayar: totaljam * 10000
//       });
//     }
//   };

  render() {
    return (
      <div>
        <center>
          <h1>Aplikasi Parkir</h1>
          <h1 className="mb-4">{this.state.kendaraan}</h1>
          <div>
            <center>
              <button onClick={this.onClickMobil} className="btn btn-outline-primary mr-5">
                Mobil
              </button>
              <button onClick={this.onClickMotor} className="btn btn-outline-primary mr-5">
                Motor
              </button>
              <div>{this.printTampilan()}</div>
            </center>
          </div>
        </center>
      </div>
    );
  }
}

// state.objek,properti
const MapStateToProps = state => {
return{

    durasiParkir: state.parkirState.durasiParkir,
    totalBayar: state.parkirState.total
}
};

export default connect(MapStateToProps, { parkirMotor, parkirMobil })(Homepage);
