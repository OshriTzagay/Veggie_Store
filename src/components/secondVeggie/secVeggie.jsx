import React from "react";

class SecVeggie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { vegName: "", vegArr: [] };
    this.renderTheName = this.renderTheName.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  renderTheName() {
    this.state.vegArr.push(this.state.vegName);
    this.setState({ vegName: this.state.vegName });
  }
  changeName(e) {
    this.state.vegName = e.target.value;
  }
  render() {
    return (
      <div>
        <h1>New Veggie Version2</h1>

        <input type="text" onChange={this.changeName} />
        <button onClick={this.renderTheName}>Add Me </button>

        <h1>{this.state.vegName}</h1>

        <ul>
          {this.state.vegArr.map((veg) => {
            return <li>{veg}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default SecVeggie;
