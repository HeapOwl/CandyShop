import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper/index";
import "./CSS/nav.css";
const checkCurrTab = (history, path) => {
  console.log(history.location.pathname, path);
  if (history.location.pathname === path) {
    return { color: "#ea1c2c" };
  } else {
    return { color: "white" };
  }
};

const Menu = ({ history }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Navbar
      id="mainNavbar"
      className={
        colorChange ? "px-3 scrolled fixed-top pink " : "px-3 fixed-top pink"
      }
      expand="lg"
      collapseOnSelect
    >
      <Navbar.Brand href="/">
        CANDY STORE <i class="bi bi-cup-straw pr-3"></i>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mr-auto my-2 my-lg-" navbarScroll>
          <Nav.Link style={checkCurrTab(history, "/shop")} href="/shop">
            Shop
            <i class="bi bi-shop-window px-2"></i>
          </Nav.Link>
          <Nav.Link style={checkCurrTab(history, "/cart")} href="/cart">
            Cart
            <i class="bi bi-cart-fill px-2"></i>
          </Nav.Link>
          {!isAuthenticated() && (
            <>
              <Nav.Link style={checkCurrTab(history, "/signin")} href="/signin">
                Sign in
                <i class="bi bi-file-earmark-person px-2"></i>
              </Nav.Link>
              <Nav.Link style={checkCurrTab(history, "/signup")} href="/signup">
                Sign up
                <i class="bi bi-people-fill px-2"></i>
              </Nav.Link>
            </>
          )}
          {isAuthenticated() && (
            <Nav.Link
              style={{ color: "red" }}
              onClick={(e) => {
                signout(() => {
                  history.push("/signin");
                });
              }}
            >
              Sign Out
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Menu);
