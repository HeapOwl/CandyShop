import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { createProduct, getallCategory } from "../admin/helper/adminapicall";
import { isAuthenticated } from "../auth/helper";

const AddProduct = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    product: "",
    FormData: "",
    error: "",
    loading: false,
    redirect: "",
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    product,
    formData,
    error,
    loading,
    redirect,
  } = values;

  const preload = () => {
    getallCategory()
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, categories: data, formData: new FormData() });
        }
      })
      .catch();
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true });

    createProduct(user.id, token, formData).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          loading: false,
          product: "",
        });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          stock: "",
          photo: "",

          category: "",
          product: data.name,
          FormData: "",
          error: "",
          loading: false,
          redirect: true,
        });
      }
    });
  };

  const successMess = () => {
    if (product) {
      return (
        <div className="alert alert-success">
          <strong>Successfully created {product}!</strong>.
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

  const handleChange = (name) => (event) => {
    let val = "";
    if (name === "photo") {
      val = event.target.files[0];
    } else {
      val = event.target.value;
    }
    formData.set(name, val);
    setValues({ ...values, [name]: val });
  };

  const createProductForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, inde) => (
              <option key={inde} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("stock")}
          type="number"
          className="form-control"
          placeholder="Quantity"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Create Product
      </button>
    </form>
  );

  return (
    <Base
      title="Add a product here!"
      icon="bi bi-product mx-3"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      {successMess()}
      {errorMess()}
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">{createProductForm()}</div>
      </div>
    </Base>
  );
};

export default AddProduct;
