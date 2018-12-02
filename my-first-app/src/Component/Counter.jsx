import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncr = this.handleIncr.bind(this);
  // }
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };
  handleIncr = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.state.count}</span>
        <button onClick={this.handleIncr} className="btn btn-primary btn-sm">
          Increment
        </button>
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
