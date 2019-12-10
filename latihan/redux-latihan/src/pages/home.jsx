import React, { Component } from "react";
import { connect } from "react-redux";
import {totalBayar} from '../redux/actions'

class Home extends Component {
  state = {
    kendaraan: "",
    klikMuncul: 0,
    totalBayar: 0,
    durasi: 0
  };

  printCon = () => {
    var open = this.state.klikMuncul;

    if (open === 1) {
      return (
        <div>
          <input ref="jamParkir" className="mt-5" type="number" />
          <p>Total bayar Rp.{this.state.totalBayar},00</p>
          <button onClick={this.onClickBayar} className="btn btn-danger">
            Bayar
          </button>
          <p>{this.state.durasi}jam</p>
          <p>Catatan = Rp.5000/jam</p>
        </div>
      );
    } else if (open === 2) {
      return (
        <div>
          <input ref="jamParkir" className="mt-5" type="number" />
          <p>Total bayar Rp.{this.state.totalBayar},00</p>
          <button onClick={this.onClickBayar} className="btn btn-danger">
            Bayar
          </button>
          <p>{this.state.durasi}jam</p>
          <p>Catatan = Rp.2000/jam</p>
        </div>
      );
    }
  };

  onClickMobil = () => {
    this.setState({
      kendaraan: "Mobil",
      klikMuncul: 1
    });
    console.log(this.state.klikMuncul);
  };

  onClickMotor = () => {
    this.setState({
      kendaraan: "Motor",
      klikMuncul: 2
    });
    console.log(this.state.klikMuncul);
  };

  onClickBayar = () => {
    var durasi = this.refs.jamParkir.value;
    var open = this.state.klikMuncul;

    if (open === 1) {
      this.setState({
        durasi: durasi,
        totalBayar: durasi * 5000
      });
      this.props.totalBayar(this.state.totalBayar)
    } else if (open === 2) {
      this.setState({
        durasi: durasi,
        totalBayar: durasi * 2000
      });
      this.props.totalBayar(this.state.totalBayar)
    }

  };

  render() {
    return (
      <div className="App">
        <p className="teks">Aplikasi Parkir {this.state.kendaraan}</p>
        <button onClick={this.onClickMobil} className="btn btn-success mr-4">
          Mobil
        </button>
        <button onClick={this.onClickMotor} className="btn btn-primary">
          Motor
        </button>
        {this.printCon()}
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    bayarParkir: state.Bayar
  };
};

export default connect(MapStateToProps,{totalBayar}) (Home);
