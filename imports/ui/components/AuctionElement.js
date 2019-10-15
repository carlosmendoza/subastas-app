import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import classnames from "classnames";

// Auction Element - represents a single auction element
class AuctionElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bidUpValue: props.actualValue,
      winnersPhone: props.winnersPhone
    };

    const finishDate = new Date(this.props.finishDate);

    if (!this.props.completed && finishDate <= new Date()) {
      this.toogleCompleted();
    }
  }

  toogleCompleted = () => {
    // Set the complete property to the opposite of its current value
    Meteor.call("auctions.setCompleted", this.props.auctionId);
  };

  onChange = e => {
    this.setState({ bidUpValue: e.target.value });
  };

  onChange2 = e => {
    this.setState({ winnersPhone: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    if (Meteor.user() !== null) {
      if (
        this.state.bidUpValue > this.props.actualValue &&
        this.state.bidUpValue - this.props.actualValue >= this.props.minIncrease
      ) {
        Meteor.call(
          "auctions.bidup",
          this.props.auctionId,
          Meteor.user().username,
          this.state.bidUpValue,
          this.state.winnersPhone
        );
      } else {
        alert("The bid up value is not valid, try with another amomunt");
      }
    } else {
      alert("You should be log in to continue");
    }
  };

  handleEditClick = e => {
    e.preventDefault();

    const productName = ReactDOM.findDOMNode(
      this.refs.productName
    ).value.trim();
    const productDescription = ReactDOM.findDOMNode(
      this.refs.productDescription
    ).value.trim();
    const minIncrease = ReactDOM.findDOMNode(
      this.refs.minIncrease
    ).value.trim();

    if (Meteor.user().username === this.props.username) {
      Meteor.call(
        "auctions.edit",
        this.props.auctionId,
        productName,
        productDescription,
        minIncrease
      );
    } else {
      alert("You are not the owner of this auction");
    }
  };

  renderButtons() {
    if (!this.props.completed) {
      if (
        Meteor.user() !== null &&
        Meteor.user().username === this.props.username
      ) {
        return (
          <div className="row justify-content-md-center">
            <input
              type="submit"
              className="btn"
              id="btn-bid"
              value="Bid up"
              onClick={this.handleClick}
            />
            <input
              type="submit"
              className="btn btn-warning"
              id="btn-edit"
              value="Edit"
              onClick={this.handleEditClick}
            />
            <input
              type="submit"
              className="btn btn-danger"
              value="Close"
              onClick={this.toogleCompleted}
            />
          </div>
        );
      } else {
        return (
          <div className="row justify-content-md-center">
            <input
              type="submit"
              className="btn"
              id="btn-bid"
              value="Bid up"
              onClick={this.handleClick}
            />
          </div>
        );
      }
    }
  }

  renderInput() {
    if (
      Meteor.user() !== null &&
      Meteor.user().username === this.props.username
    ) {
      return (
        <div className="container">
          <div className="form-group row">
            <label htmlFor="owner" className="col-sm-6 col-form-label">
              Owner:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                value={this.props.username}
                className="form-control"
                id="owner"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="productName" className="col-sm-6 col-form-label">
              Product name:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                placeholder={this.props.productName}
                className="form-control"
                id="productName"
                ref="productName"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="productDescription"
              className="col-sm-6 col-form-label"
            >
              Product description:
            </label>
            <div className="col-sm-6">
              <textarea
                type="text"
                placeholder={this.props.productDescription}
                className="form-control"
                id="productDescription"
                ref="productDescription"
                rows="3"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="minIncrease" className="col-sm-6 col-form-label">
              Minimum amount increase:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                placeholder={this.props.minIncrease}
                className="form-control"
                id="minIncrease"
                ref="minIncrease"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="value" className="col-sm-6 col-form-label">
              Actual value:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                value={this.props.actualValue}
                className="form-control"
                id="actualValue"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="winner" className="col-sm-6 col-form-label">
              Actual winner:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                value={this.props.winner}
                className="form-control"
                id="winner"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="winner" className="col-sm-6 col-form-label">
              Winners contact number:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                value={this.props.winnersPhone}
                className="form-control"
                id="winnersPhone"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bidUpValue" className="col-sm-6 col-form-label">
              Bid up value:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                placeholder={this.state.bidUpValue}
                className="form-control"
                id="bidUpValue"
                ref="bidUpValue"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="finishDate" className="col-sm-6 col-form-label">
              End Date:
            </label>
            <div className="col-sm-6">
              <input
                id="finishDate"
                type="text"
                placeholder={this.props.finishDate}
                className="form-control"
                readOnly
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="form-group row">
            <label htmlFor="owner" className="col-sm-6 col-form-label">
              Owner:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                value={this.props.username}
                className="form-control"
                id="owner"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="productName" className="col-sm-6 col-form-label">
              Product name:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                placeholder={this.props.productName}
                className="form-control"
                id="productName"
                ref="productName"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="productDescription"
              className="col-sm-6 col-form-label"
            >
              Product description:
            </label>
            <div className="col-sm-6">
              <textarea
                type="text"
                placeholder={this.props.productDescription}
                className="form-control"
                id="productDescription"
                ref="productDescription"
                rows="3"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="minIncrease" className="col-sm-6 col-form-label">
              Minimum amount increase:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                placeholder={this.props.minIncrease}
                className="form-control"
                id="minIncrease"
                ref="minIncrease"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="value" className="col-sm-6 col-form-label">
              Actual value:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                value={this.props.actualValue}
                className="form-control"
                id="actualValue"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="winner" className="col-sm-6 col-form-label">
              Actual winner:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                value={this.props.winner}
                className="form-control"
                id="winner"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="winnersPhone" className="col-sm-6 col-form-label">
              Contact number:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="winnersPhone"
                ref="winnersPhone"
                onChange={this.onChange2}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bidUpValue" className="col-sm-6 col-form-label">
              Bid up value:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                placeholder={this.state.bidUpValue}
                className="form-control"
                id="bidUpValue"
                ref="bidUpValue"
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="finishDate" className="col-sm-6 col-form-label">
              End Date:
            </label>
            <div className="col-sm-6">
              <input
                id="finishDate"
                type="text"
                placeholder={this.props.finishDate}
                className="form-control"
                readOnly
              />
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    // Give auction element a differente className when they are completed,
    // so that we can style them nicely in CSS
    const auctionClassName = classnames({
      completed: this.props.completed,
      auction: !this.props.completed
    });

    return (
      <div className={auctionClassName}>
        <form>
          {this.renderInput()}
          {this.renderButtons()}
        </form>
      </div>
    );
  }
}

export default AuctionElement;
