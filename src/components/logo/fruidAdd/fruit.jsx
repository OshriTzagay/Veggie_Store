import React from "react";

class Fruit extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", fruitArr: [] };
    this.showingFruitInput = this.showingFruitInput.bind(this);
  }

  showingFruitInput() {
    let inp = document.getElementById("addFruitInput");
    this.setState({ name: inp.value });
    this.state.fruitArr.push(inp.value);
    inp.value = " ";
  }

  render() {
    return (
      <div className="addFruitDiv">
        <h2 className="addFruitTitle">Lets Add a Fruit...</h2>
        <img
          src="https://www.worldatlas.com/r/w1200/upload/46/cb/e1/shutterstock-252338818.jpg"
          className="vegPic"
          alt=""
        />
        <hr />

        <input id="addFruitInput" type="text"></input>
        <p></p>
        <button id="addFruitBtn" onClick={this.showingFruitInput}>
          Add!
        </button>
        <h3>{this.state.name}</h3>
        <ul>
          {this.state.fruitArr.map((fru) => (
            <li>{fru}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Fruit;
