import React, { Component } from "react";
import Axios from "axios";
import { APIURL } from "../support/ApiUrl";
import { Button, Form} from "semantic-ui-react";
import Swal from 'sweetalert2'


class RegisterUser extends Component {
  state = {
    error: "",
    loading: false
  };

  onRegisterClick = () => {
    var registrasiusername = this.refs.registrasiusername.value;
    var registrasipassword = this.refs.registrasipassword.value;
    var enterpassword = this.refs.enterpassword.value
    var role='user'
    var newuser={registrasiusername,registrasipassword,role}

    if( registrasiusername===''||registrasipassword===''|| enterpassword===''){
        Swal.fire({
            icon: 'error',
            title:'Gagal',
            text:'data harus diisi semua'
        })
    }else{
        Axios.get(`${APIURL}users?username=${registrasiusername}`)
            .then((res)=>{
                if(res.data.length === 0){
                    if(registrasipassword!== enterpassword){
                        Swal.fire({
                            icon: 'error',
                            title:'Gagal',
                            text:'password tidak sesuai'
                        })
                    }
                    else{
                        Axios.post(`${APIURL}users`,newuser)
                            .then((res1)=>{
                                Swal.fire({
                                    icon: 'success',
                                    title:'berhasil',
                                    text:'user berhasil daftar'
                                })
                                this.props.history.push('login')
                            }).catch((err1)=>{
                                console.log(err1)
                            })
                    }
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title:'Gagal',
                        text:'user sudah terdaftar'
                    })
                }
            })
    }
  };

  render() {
    return (
      <div className="container mt-auto" style={{width:'50%'}}>
        <Form className="mt-3 justify-content-center">
            <h1>Registrasi</h1>
          <Form.Field>
            <label>Username</label>
            <input placeholder="username" ref="registrasiusername"/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="Password" ref="registrasipassword" />
          </Form.Field>
          <Form.Field>
            <label>Re-enter Password</label>
            <input type="password" placeholder="Password" ref="enterpassword" />
          </Form.Field>
          <Button onClick={this.onRegisterClick} type="submit" >Submit</Button>
        </Form>
      </div>
    );
  }
}

export default RegisterUser;
