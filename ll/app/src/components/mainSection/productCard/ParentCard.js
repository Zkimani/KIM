import React, { Component } from "react";
class ParentCard extends Component {
  constructor(props) {
    super(props);
  }
  state = { productName: "product" };
  setParent() {
    console.log("Parent set");
    this.setState({ productName: " Parent" });
  }
  render() {
    return <div />;
  }
}

export default ParentCard;
