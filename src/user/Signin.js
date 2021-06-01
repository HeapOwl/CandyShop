import React, { useState } from "react";
import Base from "../core/Base";
import { signin, isAuthenticated, authenticate } from "../auth/helper/index";
import { Link, Redirect } from "react-router-dom";

const Signin = () => {
  const [obj, setObj] = useState({
    password: "",
    email: "",
    errors: "",
    loading: false,
    didRedirect: false,
  });

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setObj({ ...obj, errors: false, [name]: event.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setObj({ ...obj, errors: "", loading: true });
    signin({ email: obj.email, password: obj.password })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setObj({ ...obj, errors: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setObj({ ...obj, didRedirect: true });
          });
        }
      })
      .catch((e) => {
        console.log("error in signin", e);
      });
  };
  const loadingMess = () => {
    if (obj.loading) {
      return (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-success">loading.. .</div>
          </div>
        </div>
      );
    }
  };
  const errorMess = () => {
    if (obj.errors) {
      return (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-danger">
              <strong>Failed!</strong>
              {"    " + obj.errors} .
            </div>
          </div>
        </div>
      );
    }
  };

  const handleRedirect = () => {
    if (obj.didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
  };

  return isAuthenticated() ? (
    <Redirect to="/shop" />
  ) : (
    <Base>
      <h1 className="text-white text-center bg-danger font-weight-light py-5 px-3">
        <span className="text-warning"> Welcome</span> back !
      </h1>
      {loadingMess()}
      {errorMess()}
      <form>
        <div className="row mt-5 p-3">
          <div className="col-md-6 offset-md-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={obj.email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={obj.password}
                onChange={handleChange("password")}
              />
            </div>
            <d className="d-grid ">
              {" "}
              <button
                onClick={onsubmit}
                type="submit"
                className="btn btn-success "
              >
                Submit
              </button>
            </d>
          </div>
        </div>
      </form>
    </Base>
  );
};

export default Signin;
