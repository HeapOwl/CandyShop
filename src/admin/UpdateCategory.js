import React, { useEffect } from "react";
import Base from "../core/Base";
import { useState } from "react";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { updatecategory, getcategory } from "./helper/adminapicall";

const UpdateCategory = ({ match }) => {
  const [cate, setCate] = useState({});
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAuthenticated();

  const onsubmit = e => {
    e.preventDefault();
    console.log({ name });
    updatecategory(match.params.catId, user.id, token, { name }).then(data => {
      if (data.error) {
        setSuccess(false);
        setError(data.error);
      } else {
        setError(false);
        setSuccess(data.name);
        setName("");
      }
    });
  };

  const leftSide = () => {
    return (
      <div className="card text-white bg-primary mb-3">
        <div className="card-header bg-primary">Admin Nav</div>
        <div className="card-body">
          <Link to="/admin/dashboard" className="nav-link text-dark">
            Home
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
          <Link to="/admin/orders" className="nav-link text-white">
            Manage Orders
          </Link>
        </div>
      </div>
    );
  };
  const rightSide = () => {
    return (
      <form>
        <div className="mb-3 text-white">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Category
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            required
            placeholder="Ex . Summer"
            aria-describedby="emailHelp"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="d-grid ">
          <button type="submit" onClick={onsubmit} className="btn btn-success ">
            Create
          </button>
        </div>
        {name}
      </form>
    );
  };

  const successMess = () => {
    if (success) {
      return (
        <div className="alert alert-success">
          <strong>Successfully created {success}!</strong>.
        </div>
      );
    }
  };
  const errorMess = () => {
    if (error) {
      return (
        <div className="alert alert-danger">
          <strong> Failed - {error}!</strong>.
        </div>
      );
    }
  };

  const preload = () => {
    getcategory(match.params.catId)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setCate(data);
          setName(data.name);
        }
      })
      .catch(e => console.log(e));
  };
  useEffect(() => {
    preload();
  }, []);

  return (
    <Base
      className="container my-4 "
      title="Update Category"
      description="Update Product Category"
      icon="bi bi-cart mx-3"
    >
      {successMess()}
      {errorMess()}
      <div className="row">
        <div className="col-3 p-0">{leftSide()}</div>
        <div className="col-9">{rightSide()}</div>
      </div>
    </Base>
  );
};
export default UpdateCategory;
