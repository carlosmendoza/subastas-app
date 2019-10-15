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

    if (Meteor.user() !== null) {
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
      const finishDate = ReactDOM.findDOMNode(
        this.refs.finishDate
      ).value.trim();

      Meteor.call(
        "auctions.insert",
        productName,
        productDescription,
        minIncrease,
        finishDate
      );

      Auctions.insert({
        productName, // product name
        productDescription, // product description
        minIncrease, // minimum increase
        actualValue: "0", // initial value
        winner: "No body", // actual winner
        owner: Meteor.userId, // user
        username: Meteor.user().username, // username of logged in user
        createAt: new Date(), // current time
        finishDate
      });

      // Clear form
      ReactDOM.findDOMNode(this.refs.productName).value = "";
      ReactDOM.findDOMNode(this.refs.productDescription).value = "";
      ReactDOM.findDOMNode(this.refs.minIncrease).value = "";
      ReactDOM.findDOMNode(this.refs.finishDate).value = "";
    } else {
      alert("You should be log in to continue");
    }
  }

  formatDate() {
    let d = new Date();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) {
      mont = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("-");
  }

  render() {
    return (
      <div className="addAuctionElement">
        <h2>Please complete the following information</h2>
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
            <textarea
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
          <div className="form-group">
            <label htmlFor="productName">Finish Date:</label>
            <input
              className="form-control"
              type="date"
              min={this.formatDate()}
              ref="finishDate"
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
