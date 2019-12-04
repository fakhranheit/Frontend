import React, { Component } from "react";
import Axios from "axios";
import { APIURL, TOKEN } from "../support/apiURL";

class Home extends Component {
  state = {
    datapropinsi: [],
    dataKabupaten:[]
  };

  componentDidMount() {
    Axios.get(`${APIURL}/MeP7c5ne${TOKEN}/m/wilayah/provinsi`)
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
        return <option>Silahkan pilih provinsi</option>
    }
    return this.state.dataKabupaten.map((val,index)=>{
        return(
        <option value={val.id} key={index}>{val.name}</option>
        )
    })
  }

  onPropinsiChange=(e)=>{
    var idprov= e.target.value
    Axios.get(`${APIURL}/MeP7c5ne${TOKEN}/m/wilayah/kabupaten?idpropinsi=${idprov}`)
    .then((res)=>{
        this.setState({ dataKabupaten:res.data.data})
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
        <select > 
            {this.renderKabupaten()}
        </select>
      </div>
    );
  }
}

export default Home;
