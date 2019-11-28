import React, { Component } from 'react';

class Content extends Component {
    state = {  }


    componentDidMount(){
        console.log('masuk did mount')
    }

    renderStnk=()=>{
        var jsx= this.props.stnk1.map((val,index)=>{
            // this.props ini menunjuk pada stnk yang ada di apps.js
            return(
                <div key={index} className="col-md-4 px-5 py-0 borderData">
                    <div>{val.nama}</div>
                    <div>{val.kendaraan}</div>
                    <div>{val.warna}</div>
                </div>
            )
        })
        console.log(jsx)
        return jsx
    }

    render() { 
        console.log('masuk render content')
        return (
            <div className='row mx-5'>
                {this.renderStnk()}
                <div className='d-flex'>
                    <button className="mx-5" onClick={()=>this.props.tambahangka(1)}>+</button>
                    <button className="mx-5">-</button>
                </div>
            </div>
          );
    }
}
 
export default Content;