import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
const NavBar = () =>{
    return (
        <div className="NavBar">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Subastas App
                </a>
                <AccountsUIWrapper></AccountsUIWrapper>
            </nav>
        </div>
    )
}
export default NavBar;