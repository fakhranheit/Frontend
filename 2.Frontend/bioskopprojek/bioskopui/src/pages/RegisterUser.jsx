import React, { Component } from "react";
import Axios from "axios";
import { APIURL } from "../support/ApiUrl";
import Swal from "sweetalert2";
import color from "@material-ui/core/colors/amber";

class RegisterUser extends Component {
  state = {
    error: "",
    loading: false
  };

  onRegisterClick = () => {
    var registrasiusername = this.refs.registrasiusername.value;
    var registrasipassword = this.refs.registrasipassword.value;
    var enterpassword = this.refs.enterpassword.value;
    var role = "user";
    var newuser = { registrasiusername, registrasipassword, role };

    if (registrasiusername === "" || registrasipassword === "" || enterpassword === "") {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "data harus diisi semua"
      });
    } else {
      Axios.get(`${APIURL}users?username=${registrasiusername}`).then(res => {
        if (res.data.length === 0) {
          if (registrasipassword !== enterpassword) {
            Swal.fire({
              icon: "error",
              title: "Gagal",
              text: "password tidak sesuai"
            });
          } else {
            Axios.post(`${APIURL}users`, newuser)
              .then(res1 => {
                Swal.fire({
                  icon: "success",
                  title: "berhasil",
                  text: "user berhasil daftar"
                });
                this.props.history.push("login");
              })
              .catch(err1 => {
                console.log(err1);
              });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "user sudah terdaftar"
          });
        }
      });
    }
  };

  render() {
    return (
      <div style={{height:'90vh'}}>
        <div className="container borderregis" style={{ width: "20%" }}>
          <h1>Registrasi</h1>

          <div>
            <label>Username</label>
            <input className="form-control" placeholder="username" ref="registrasiusername" />
          </div>

          <div>
            <label>Password</label>
            <input className="form-control" type="password" placeholder="Password" ref="registrasipassword" />
          </div>
          <div>
            <label>Re-enter Password</label>
            <input className="form-control" type="password" placeholder="Password" ref="enterpassword" />
          </div>

          <button onClick={this.onRegisterClick} className="btn btn-dark mt-4 mb-3" type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default RegisterUser;
