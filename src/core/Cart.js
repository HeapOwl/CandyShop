import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import Card from "./card";

import { loadCart } from "./helper/cartHelper";
import CheckoutB from "./CheckoutB";
import { isAuthenticated } from "../auth/helper";
import { Container } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  const loadProducts = () => {
    if (products.length == 0) {
      return <h2 className="text-center text-dark py-5">No Item in Cart</h2>;
    }
    return (
      products &&
      products.map((prod, inde) => (
        <Card
          key={inde}
          addtocart={false}
          reload={reload}
          setReload={setReload}
          removefromcart={true}
          prod={prod}
        />
      ))
    );
  };
  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  return (
    <>
      <Base
        title="Welcome to Cart"
        description="Ready to checkout"
        className=" text-white"
      >
        <h1 className="text-white  bg-danger font-weight-light py-5 px-3">
          Ready to <span className="text-warning"> CheckOut</span>
        </h1>
        <Container>
          <div className="row">
            <div className="col-md-6">{loadProducts()}</div>
            <div className="col-md-6">
              {isAuthenticated() && products ? (
                <CheckoutB
                  products={products}
                  setReload={setReload}
                  reload={reload}
                />
              ) : (
                <h2>LOGIN TO PURCHASE</h2>
              )}
            </div>
          </div>
        </Container>
      </Base>
    </>
  );
};

export default Home;
