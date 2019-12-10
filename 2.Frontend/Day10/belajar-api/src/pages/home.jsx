import React, { Component } from "react";
import Axios from "axios";
import { APIURL, TOKEN } from "../support/apiURL";
import {connect} from 'react-redux'

class Home extends Component {
  state = {
    datapropinsi: [],
    dataKabupaten:[],
    dataKecamatan:[],
    dataKelurahan:[]
  };

  componentDidMount() {

  Axios.get(`${APIURL}/poe`)
  .then(res => {
    this.setState({
      tokenBaru:res.data.token
    });
  })

    Axios.get(`${APIURL}MeP7c5ne${this.props.Token}/m/wilayah/provinsi`)
      .then(res => {
        this.setState({
          datapropinsi: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderPropinsi = () => {
    return this.state.datapropinsi.map((val, index) => {
      return (
        <option value={val.id} key={index}>{val.name}</option>
      );
    });
  };

  renderKabupaten=()=>{
    if(this.state.dataKabupaten.length===0){
        return <option>Silahkan pilih kabupaten</option>
    }
    return this.state.dataKabupaten.map((val,index)=>{
        return(
        <option value={val.id} key={index}>{val.name}</option>
        )
    })
  }

  renderKecamatan=()=>{
    if(this.state.dataKecamatan.length===0){
        return <option>Silahkan pilih kecamatan</option>
    }
    return this.state.dataKecamatan.map((val,index)=>{
        return(
        <option value={val.id} key={index}>{val.name}</option>
        )
    })
  }

  renderKelurahan=()=>{
    if(this.state.dataKelurahan.length===0){
        return <option>Silahkan pilih dataKelurahan</option>
    }
    return this.state.dataKelurahan.map((val,index)=>{
        return(
        <option value={val.id} key={index}>{val.name}</option>
        )
    })
  }

  onPropinsiChange=(e)=>{
    var idprov= e.target.value
    Axios.get(`${APIURL}MeP7c5ne${this.props.Token}/m/wilayah/kabupaten?idpropinsi=${idprov}`)
    .then((res)=>{
        this.setState({ dataKabupaten:res.data.data})
    }).catch((err)=>{

    })
  }

  onKabupatenChange=(e)=>{
    var idkab= e.target.value
    Axios.get(`${APIURL}MeP7c5ne${this.props.Token}/m/wilayah/kabupaten?idkabupaten=${idkab}`)
    .then((res)=>{
        this.setState({ dataKecamatan:res.data.data})
    }).catch((err)=>{

    })
  }

  onKecamatanChange=(e)=>{
    var idkec= e.target.value
    Axios.get(`${APIURL}MeP7c5ne${this.props.Token}/m/wilayah/kelurahan?idkecamatan=${idkec}`)
    .then((res)=>{
        this.setState({ dataKelurahan:res.data.data})
    }).catch((err)=>{

    })
  }

  render() {
    if (this.state.datapropinsi.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div className="mt-4 justify-content-center d-flex">
        <select onChange={this.onPropinsiChange} ref='propinsi'>
        <option selected hidden>pilih provinsi</option>    
        {this.renderPropinsi()}
        </select>
        <select onChange={this.onKabupatenChange}> 
            {this.renderKabupaten()}
        </select>
        <select onChange={this.onKecamatanChange}>
            {this.renderKecamatan()}
        </select>
        <select>
            {this.renderKelurahan()}
        </select>
      </div>
    );
  }
}

const MapstatetoProps=({Token})=>{
return{
  Token
}
}

export default connect(MapstatetoProps) (Home);
