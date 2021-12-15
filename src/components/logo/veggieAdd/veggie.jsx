import React from "react";

class Veggie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", vegArray: [] };
    this.showingVeggieInput = this.showingVeggieInput.bind(this);
  }

  showingVeggieInput() {
    let inp = document.getElementById("addVeggieInput");
    this.setState({ name: inp.value });
    this.state.vegArray.push(inp.value);
    inp.value = " ";
  }

  render() {
    return (
      <div className="addVeggieDiv">
        <h2 className="addVeggieTitle">Lets Add a Veggie..</h2>
        <hr />

        <input id="addVeggieInput" type="text"></input>
        <p></p>
        <button id="addVeggieBtn" onClick={this.showingVeggieInput}>
          Add!
        </button>
        <h3>{this.state.name}</h3>
        <ul>
          {this.state.vegArray.map((veg) => {
            return <li>{veg}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Veggie;
