import React from "react";
import Menu from "./nav";
import "./CSS/home.css";
const Base = ({
  title = "",
  description = "Want Sugar RUSH !! ",
  className = "",
  icon = "",
  children,
}) => {
  return (
    <div>
      <Menu />

      <div className={className}>{children}</div>
    </div>

    // {/* <footer className="footer mt-3 bg-dark">
    //   <div className="container-fluid bg-success text-white text-center py-3">
    //     <h4>feel free to reach us</h4>
    //     <button className="btn btn-lg btn-warning"> contact Us</button>
    //   </div>
    //   <div className="container">
    //     <span className="text-muted">An amazing thing to buy Product</span>
    //   </div>
    // </footer> */}
  );
};

export default Base;
