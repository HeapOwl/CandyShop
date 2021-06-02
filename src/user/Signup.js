import React, { useState } from "react";
import Base from "../core/Base";
import { signup } from "../auth/helper/index";
import { Link } from "react-router-dom";
const Signup = () => {
  const [obj, setObj] = useState({
    name: "",
    password: "",
    email: "",
    errors: "",
    success: false,
  });

  const handleChange = (name) => (event) => {
    setObj({ ...obj, errors: false, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setObj({ ...obj, errors: false });
    const { name, password, email } = obj;
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setObj({ ...obj, errors: data.error, success: false });
          console.log(data);
        } else {
          setObj({
            name: "",
            password: "",
            email: "",
            errors: "",
            success: true,
          });
        }
      })
      .catch((e) => {
        console.log("error in signup", e);
      });
  };

  const successMess = () => {
    if (obj.success) {
      return (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-success">
              <strong>Success!</strong> You can{" "}
              <Link to="/signin" className="alert-link">
                Log in here
              </Link>
              .
            </div>
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
              <strong>Failed!</strong> To register{"    " + obj.errors} .
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Base>
      <h1 className="text-white text-center bg-danger font-weight-light py-5 px-3">
        <span className="text-warning"> Feel</span> the sweetness{" "}
        <i class="bi bi-stars"></i>
      </h1>
      {successMess()}
      {errorMess()}
      <form className="p-3 m-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword2"
                placeholder="Jhon Doe"
                value={obj.name}
                onChange={handleChange("name")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="example@email.com"
                value={obj.email}
                onChange={handleChange("email")}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                placeholder="dots"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={obj.password}
                onChange={handleChange("password")}
              />
            </div>

            <div className="d-grid ">
              {" "}
              <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-success "
              >
                Submit
                <i className="bi bi-person-plus mx-3"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="m-5 p-2"></div>
    </Base>
  );
};

export default Signup;
