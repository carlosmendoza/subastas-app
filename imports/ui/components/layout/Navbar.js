import React from "react";
import { Link } from "react-router-dom";

import AccountUIWrapper from "../../AccountsUIWrapper";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="nav navbar-nav active">
          <li>
            <Link to={"/"} className="navbar-brand nav-link">
              Bidding Now
            </Link>
          </li>
          <li>
            <Link to={"/addElement"} className="nav-link">
              Add Element
            </Link>
          </li>
          <li>
            <Link to={"/purchasedElement"} className="nav-link">
              Purchased Elements
            </Link>
          </li>
          <li>
            <Link to={"/sellElement"} className="nav-link">
              Sell Elements
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
