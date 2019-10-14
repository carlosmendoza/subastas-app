import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

import { Auctions } from "../../api/auctions";

class AddElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the txt field via React ref
    const productName = ReactDOM.findDOMNode(
      this.refs.productName
    ).value.trim();
    const productDescription = ReactDOM.findDOMNode(
      this.refs.productDescription
    ).value.trim();
    const minIncrease = ReactDOM.findDOMNode(
      this.refs.minIncrease
    ).value.trim();

    Meteor.call(
      "auctions.insert",
      productName,
      productDescription,
      minIncrease
    );

    Auctions.insert({
      productName, // product name
      productDescription, // product description
      minIncrease, // minimum increase
      actualValue: "0", // initial value
      winner: "No body", // actual winner
      owner: Meteor.userId, // user
      username: Meteor.user().username, // username of logged in user
      createAt: new Date() // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.productName).value = "";
    ReactDOM.findDOMNode(this.refs.productDescription).value = "";
    ReactDOM.findDOMNode(this.refs.minIncrease).value = "";
  }

  render() {
    return (
      <div className="addAuctionElement">
        <h1>Please complete the following information</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="productName">Product name:</label>
            <input
              className="form-control"
              type="text"
              ref="productName"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productName">Product description:</label>
            <input
              className="form-control"
              type="text"
              ref="productDescription"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productName">Minimum amount increase:</label>
            <input
              className="form-control"
              type="number"
              min="0"
              ref="minIncrease"
              required
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddElement;
