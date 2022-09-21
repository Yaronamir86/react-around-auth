import logo from "../images/logo.svg";
import {React, Route, Link} from "react-router-dom"

function Header({ onSignOut, email }) {
  function handleSignOut(){
    onSignOut();
  }
  return (
    <header className="Header">
      <Route exact path="/">
      <div className="header__wrapper">
      <img className="header__logo" src={logo} alt="around the u.s logo" />
      <div className="header__content">
        <p className="header__user">{email}</p>
        <button className="header__logout" onClick={handleSignOut}>
          Sign out
        </button>
        </div>
        </div>
        </Route>
        <Route path="/signup">
        <div className="header__wrapper">
        <img className="header__logo" src={logo} alt="around the u.s logo" />
          <Link className="header__auth-link" to="signin">
            Sign in
            </Link>
            </div>
        </Route>
        <Route path="/signin">
        <div className="header__wrapper">
        <img className="header__logo" src={logo} alt="around the u.s logo" />
          <Link className="header__auth-link" to="signup">
            Sign up
            </Link>
            </div>
        </Route>
    </header>
  );
}

export default Header;
