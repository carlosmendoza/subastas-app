import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

import AuctionElement from "./AuctionElement";

class AuctionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false
    };
  }

  renderAuctions() {
    let filteredAuctions = this.props.auctions;
    if (this.state.hideCompleted) {
      filteredAuctions = filteredAuctions.filter(auction => !auction.completed);
    }
    if (Meteor.user() !== null) {
      return (
        <div className="auctionGrid">
          {filteredAuctions.map(auction => (
            <AuctionElement
              key={auction._id}
              auctionId={auction._id}
              username={auction.username}
              owner={auction.owner}
              productName={auction.productName}
              productDescription={auction.productDescription}
              minIncrease={auction.minIncrease}
              actualValue={auction.actualValue}
              winner={auction.winner}
              winnersPhone={auction.winnersPhone}
              completed={auction.completed}
              currentUser
              finishDate={auction.finishDate}
            />
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  toogleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }

  render() {
    if (Meteor.user() === null) {
      return <div></div>;
    } else {
      return (
        <div>
          <h2>Registered Auctions</h2>
          <div className="custom-control custom-switch">
            <div className="row justify-content-md-center">
              <input
                type="checkbox"
                className="custom-control-input"
                id="toggleCompleted"
                readOnly
                checked={this.state.hideCompleted}
                onClick={this.toogleHideCompleted.bind(this)}
              />
              <label htmlFor="toggleCompleted" className="custom-control-label">
                Hide completed auctions
              </label>
            </div>
          </div>
          {this.renderAuctions()}
        </div>
      );
    }
  }
}

export default AuctionList;
