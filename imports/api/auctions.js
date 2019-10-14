import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Auctions = new Mongo.Collection("auctions");

if (Meteor.isServer) {
  Meteor.publish("auctions", () => {
    return Auctions.find({});
  });
}

Meteor.methods({
  "auctions.insert"(productName, productDescription, minIncrease) {
    check(productName, String);
    check(productDescription, String);
    check(minIncrease, String);

    // Make sure the user is logged in before inserting an auction
    if (!this.userId) {
      throw new Meteor.Error("non-authorized");
    }
    Auctions.insert({
      productName,
      productDescription,
      minIncrease,
      actualValue: "0",
      winner: "No body",
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
      createAt: new Date()
    });
  },
  "auctions.setCompleted"(auctionId) {
    check(auctionId, String);

    const auction = Auctions.findOne(auctionId);
    if (auction.owner !== this.userId) {
      // Check the owner is the one changing the complete
      throw new Meteor.Error("non-authorized");
    }

    Auctions.update({_id:auctionId}, { $set: { completed: true } });
  },
  "auctions.bidup"(auctionId, winner, actualValue) {
    check(auctionId, String);
    check(winner, String);
    check(actualValue, String);

    Auctions.update(
      {
        _id:auctionId
      },
      {
        $set: {
          actualValue,
          winner
        }
      }
    );
  },
  "auctions.edit"(auctionId, productName, productDescription, minIncrease) {
    check(auctionId, String);
    check(productName, String);
    check(productDescription, String);
    check(minIncrease, String);

    const auction = Auctions.findOne(auctionId);
    if (auction.owner !== this.userId) {
      // Check the owner is the one changing the complete
      throw new Meteor.Error("non-authorized");
    }

    Auctions.update(
      {
        _id:auctionId
      },
      {
        $set: {
          productName,
          productDescription,
          minIncrease
        }
      }
    );
  }
});
