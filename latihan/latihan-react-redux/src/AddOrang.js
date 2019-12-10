import React, { Component } from "react";

class AddOrang extends Component {
  state = {
    name: null,
    usia: null,
    hobby: null
  };

handleChange= (e) => {
    this.setState({
        [e.target.id]: e.target.value,
    }) 
    console.log(e)
}

handleSubmit= (e) => {
    e.preventDefault(); 
    this.props.addManusia(this.state);
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="name">Usia:</label>
          <input type="text" id="usia" onChange={this.handleChange} />
          <label htmlFor="name">Hobby:</label>
          <input type="text" id="hobby" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddOrang;
