import React, { Component } from "react";
import { Table, TableBody, TableHead, TableCell, TableRow, Input } from "@material-ui/core";
import Axios from "axios";
import { APIURL } from "../support/ApiUrl";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Fade from "react-reveal/Fade";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Myswal = withReactContent(Swal);

class ManageAdmin extends Component {
  state = {
    dataFilm: [],
    readmoreselected: -1
  };

  onSaveDataClick = () => {
    var jadwaltemplate = [12, 14, 16, 18, 20];
    var jadwal = [];
    console.log(this.refs.jadwal0);

    for (var i = 0; i < jadwaltemplate.length; i++) {
      if (this.refs[`jadwal${i}`].checked) {
        jadwal.push(jadwaltemplate[i]);
      }
    }
    var iniref = this.refs;
    var title = iniref.title.value;
    var image = iniref.image.value;
    var sinopsis = iniref.synopsys.value;
    var sutradara = iniref.sutradara.value;
    var genre = iniref.genre.value;
    var durasi = iniref.durasi.value;
    var produksi = iniref.produksi.value;

    var data = {
      title: title,
      image: image,
      synopsys: sinopsis,
      sutradara: sutradara,
      genre: genre,
      durasi: durasi,
      jadwal: jadwal,
      produksi:produksi
    };

    if (title=='' || image=='' || sinopsis=='' || genre=='' || jadwal=='' || produksi=='') {
      Myswal.fire("Failed", "Data harus diisi semua", "error");
    } else {
      Myswal.fire("Berhasil", "Data berhasil dimasukkan", "success");
      
      Axios.post(`${APIURL}movies`, data)
      .then(res => {
          Axios.get(`${APIURL}movies`).then(res => {
              this.setState({ dataFilm: res.data });
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
  };

  componentDidMount() {
    Axios.get(`${APIURL}movies`)
      .then(res => {
        this.setState({ dataFilm: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderMovie = () => {
    return this.state.dataFilm.map((val, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{val.title}</TableCell>
          <TableCell>
            <img src={val.image} alt="gambar" height="200px" />
          </TableCell>
          {this.state.readmoreselected === index ? (
            <TableCell>
              {val.synopsys}
              <span onClick={() => this.setState({ readmoreselected: -1 })}> Read less</span>
            </TableCell>
          ) : (
            <TableCell>
              {val.synopsys.split("").filter((val, index) => index <= 100)}
              <span onClick={() => this.setState({ readmoreselected: index })}>ReadMore</span>
            </TableCell>
          )}
          <TableCell>{val.jadwal}</TableCell>
          <TableCell>{val.sutradara}</TableCell>
          <TableCell>{val.genre}</TableCell>
          <TableCell>{val.durasi}</TableCell>
          <TableCell>{val.produksi}</TableCell>
          <TableCell>
            <button className="btn btn-outline-primary mr-3">Edit</button>
            <button className="btn btn-outline-primary">Delete</button>
          </TableCell>
        </TableRow>
      );
    });
  };

  render() {
    return (
      <div className="mx-3">
        <Modal isOpen={this.state.modaladd} toggle={() => this.setState({ modaladd: false })}>
          <ModalHeader>Add data</ModalHeader>
          <ModalBody>
            <input type="text" ref="title" placeholder="title" className="form-control" />
            <input type="text" ref="image" placeholder="image" className="form-control" />
            <input type="text" ref="synopsys" placeholder="sinopsis" className="form-control" />
            Jadwal:
            <input type="checkbox" ref="jadwal0" />
            12.00
            <input type="checkbox" ref="jadwal1" />
            14.00
            <input type="checkbox" ref="jadwal2" />
            16.00
            <input type="checkbox" ref="jadwal3" />
            18.00
            <input type="checkbox" ref="jadwal4" />
            20.00
            <input type="text" ref="sutradara" placeholder="sutradara" className="form-control" />
            <input type="text" ref="durasi" placeholder="durasi" className="form-control" />
            <input type="text" ref="genre" placeholder="genre" className="form-control" />
            <input type="text" ref="produksi" placeholder="produksi" className="form-control" />
          </ModalBody>
          <ModalFooter>
            <button onClick={this.onSaveDataClick} className="btn btn-success">
              Save
            </button>
            <button onClick={() => this.setState({ modaladd: false })} className="btn btn-danger">
              Cancel
            </button>
          </ModalFooter>
        </Modal>
        <Fade>
          <button
            className="btn btn-success"
            onClick={() => {
              this.setState({ modaladd: true });
            }}
          >
            Add film
          </button>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Judul</TableCell>
                <TableCell>Image.</TableCell>
                <TableCell>Sinopsis</TableCell>
                <TableCell>Jadwal Tayang</TableCell>
                <TableCell>Sutradara</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Durasi</TableCell>
                <TableCell>Produksi</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderMovie()}</TableBody>
          </Table>
        </Fade>
      </div>
    );
  }
}

export default ManageAdmin;
