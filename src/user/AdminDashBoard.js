import React from "react";
import Base from "../core/Base";
// import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  // const {
  //   user: { name, email, role },
  // } = isAuthenticated();

  const leftSide = () => {
    return (
      <div
        className="card text-white bg-primary mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header bg-primary">Admin Nav</div>
        <div className="card-body">
          <Link to="/admin/create/category" className="nav-link text-white">
            Create Category
          </Link>
          <Link to="/admin/update/category" className="nav-link text-white">
            Update Category
          </Link>
          <Link to="/admin/create/product" className="nav-link text-white">
            Create Product
          </Link>
          <Link to="/admin/products" className="nav-link text-white">
            Manage Product{" "}
          </Link>
          <Link to="/admin/categories" className="nav-link text-white">
            Manage Category
          </Link>
          <Link to="/admin/orders" className="nav-link text-white">
            Manage Orders
          </Link>
        </div>
      </div>
    );
  };
  const rightSide = () => {
    return (
      <div
        style={{
          width: 100 + "%",
          height: 0,
          paddingBottom: 100 + "%",
          position: "relative",
        }}
      >
        <iframe
          title="shit post"
          src="https://giphy.com/embed/3ohc0Vhbf02CWDll2E"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <Base
      title="Welcomto to Area Admin"
      description="Manage all the products here"
      icon="bi bi-gear-fill mx-3"
      className="container bg-primary"
    >
      <div className="row">
        <div className="col-3 p-0">{leftSide()}</div>
        <div className="col-9">{rightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
