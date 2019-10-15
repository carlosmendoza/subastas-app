import React from "react";
import { Link } from "react-router-dom";

import AccountUIWrapper from "../../AccountsUIWrapper";

function Navbar() {
  return (
    <nav
      className="sticky-top navbar navbar-expand-lg navbar-light"
      id="my-navbar"
    >
      <div className="container-fluid">
        <ul className="nav navbar-nav active">
          <li>
            <Link to={"/"} className="navbar-brand nav-link">
              Bidding Now
            </Link>
          </li>
          <li>
            <Link to={"/addElement"} className="nav-link">
              Add Item
            </Link>
          </li>
          <li>
            <Link to={"/purchasedElement"} className="nav-link">
              Purchased Items
            </Link>
          </li>
          <li>
            <Link to={"/sellElement"} className="nav-link">
              Items Sold
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <AccountUIWrapper />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
