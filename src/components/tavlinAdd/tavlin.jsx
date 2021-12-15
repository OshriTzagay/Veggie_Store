import React from "react";

class Tavlin extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", tavlinsArr: [] };
    this.showingTavlinInput = this.showingTavlinInput.bind(this);
  }

  showingTavlinInput() {
    let inp = document.getElementById("addTavlinInput");
    this.setState({ name: inp.value });
    this.state.tavlinsArr.push(inp.value);
    inp.value = " ";
  }

  render() {
    return (
      <div className="addTavlinDiv">
        <h2 className="addTavlinTitle">Lets Add a Tavlin..</h2>
        <img className="vegPic"
          src="https://www.zuken.com/en/wp-content/uploads/sites/2/2019/06/BL0236-spices-1280x620-1.jpg"
          alt=""
        />
        <hr />

        <input id="addTavlinInput" type="text"></input>
        <p></p>
        <button id="addTavlinBtn" onClick={this.showingTavlinInput}>
          Add!
        </button>
        <h3>{this.state.name}</h3>
        <ul>
          {this.state.tavlinsArr.map((veg) => {
            return <li>{veg}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Tavlin;
