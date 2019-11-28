import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Table } from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class Home extends Component {
  state = {
    data: [],
    modalEdit: false,
    indexedit: -1
  };

  componentDidMount() {
    this.setState({
      data: [
        { kegiatan: "Lari", status: true, tanggal: "2019-11-27" },
        { kegiatan: "Sarapan", status: false, tanggal: "2019-11-27" }
      ]
    });
  }

  onAddDataClick = () => {
    var kegiatan = this.refs.kegiatan.value;
    var tanggal = this.refs.tanggal.value;

    var obj = {
      kegiatan,
      status: false,
      tanggal
    };

    if (kegiatan === "" || tanggal === "") {
      MySwal.fire("Error", "Data tidak boleh kosong", "error");
    } else {
      var newData = [...this.state.data, obj];
      this.setState({ data: newData, isOpen: false });
    }
  };

  onDeleteClick = index => {
    MySwal.fire({
      title: `Are you sure delete ${this.state.data[index].kegiatan} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        var data = this.state.data;
        data.splice(index, 1);
        this.setState({
          data: data
        });
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        MySwal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  onEditClick = index => {
    var editkegiatan = this.refs.editkegiatan.value;
    var edittanggal = this.refs.edittanggal.value;
    var data = this.state.data;
    var editstatus = 0;

    if (this.refs.status.value === "true") {
      editstatus = true;
    } else {
      editstatus = false;
    }

    if (editkegiatan && edittanggal) {
      data[index].kegiatan = editkegiatan;
      data[index].tanggal = edittanggal;
      data[index].status = editstatus;

      this.setState({
        data: data,
        modalEdit: false
      });
      MySwal.fire("Berhasil", "Data berhasil dimasukkan", "success");
    } else {
      MySwal.fire("gagal", "Tidak boleh kosong", "error");
    }
  };

  printTodo = () => {
    return this.state.data.map((val, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{val.kegiatan}</td>
          <td>{val.status ? "Sudah" : "Belum"}</td>
          <td>{val.tanggal}</td>
          <td>
            <button onClick={() => this.setState({ modalEdit: true, indexedit: index })} className="btn btn-primary mr-4">
              Edit
            </button>
            <button onClick={() => this.onDeleteClick(index)} className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        {/* modal add data */}
        <Modal isOpen={this.state.isOpen} toggle={() => this.setState({ isOpen: false })}>
          <ModalHeader>Add ToDo</ModalHeader>
          <ModalBody>
            <input className="form-control" placeholder="kegiatan" type="text" ref="kegiatan" />
            <input className="form-control" placeholder="tanggal" type="date" ref="tanggal" />
          </ModalBody>
          <ModalFooter>
            <button onClick={this.onAddDataClick} className="btn btn-success">
              Add
            </button>
            <button className="btn btn-danger">Cancel</button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEdit} toggle={() => this.setState({ modalEdit: false })}>
          <ModalHeader>Edit ToDo</ModalHeader>
          <ModalBody>
            <input className="form-control mb-2 mr-3" placeholder="kegiatan" type="text" ref="editkegiatan" />
            <select className="form-control mb-2" ref="status">
              <option value="true">Sudah</option>
              <option value="false"> Belum</option>
            </select>
            <input className="form-control" placeholder="tanggal" type="date" ref="edittanggal" />
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" onClick={() => this.onEditClick(this.state.indexedit)}>
              Confirm
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.setState({ modalEdit: false });
              }}
            >
              Cancel
            </button>
          </ModalFooter>
        </Modal>

        <div className="px-5 mx-5 my-5">
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Kegiatan</th>
                <th>Status</th>
                <th>Tanggal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>{this.printTodo()}</tbody>
          </Table>
          {/* modal end */}

          <div>
            <button onClick={() => this.setState({ isOpen: true })} className="btn btn-success rounded-pill">
              Add Data
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
