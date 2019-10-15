import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

import { Auctions } from "../api/auctions";

import Navbar from "./components/layout/Navbar";
import AddElement from "./components/AddElement";
import AuctionList from "./components/AuctionList";

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          {this.props.currentUser ? (
            <div>
              <h1>Hello {this.props.currentUser.username},</h1>
            </div>
          ) : (
            <div>
              <h1>To continue, please sign in or create an account</h1>
            </div>
          )}
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AuctionList
                  auctions={this.props.auctions}
                  currentUser={this.props.currentUser}
                />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/addElement"
            render={props => (
              <React.Fragment>
                <AddElement />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/purchasedElement"
            render={props => (
              <React.Fragment>
                <AuctionList
                  auctions={this.props.purchasedAuctions}
                  currentUser={this.props.currentUser}
                />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/sellElement"
            render={props => (
              <React.Fragment>
                <AuctionList
                  auctions={this.props.sellAuctions}
                  currentUser={this.props.currentUser}
                />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("auctions");

  if (Meteor.user()) {
    return {
      auctions: Auctions.find({}, { sort: { createAt: -1 } }).fetch(),
      purchasedAuctions: Auctions.find(
        { winner: Meteor.user().username },
        { sort: { createAt: -1 } }
      ).fetch(),
      sellAuctions: Auctions.find(
        { username: Meteor.user().username },
        { sort: { createAt: -1 } }
      ).fetch(),
      currentUser: Meteor.user()
    };
  } else {
    return {
      auctions: Auctions.find({}, { sort: { createAt: -1 } }).fetch(),
      currentUser: Meteor.user()
    };
  }
})(App);
