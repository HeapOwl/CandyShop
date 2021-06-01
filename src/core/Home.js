import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";
import { Container, Image, Jumbotron } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState(false);

  const loadProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setErr(data.error);
        } else {
          setProducts(data);
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Base>
      <Carousel fade className="d-none d-md-block " controls={false}>
        <Carousel.Item style={{ height: "47vh" }}>
          <Image
            fluid
            src="https://papabubble.co.in/wp-content/uploads/2018/05/new-banner1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: "47vh" }}>
          <Image
            fluid
            src="https://papabubble.co.in/wp-content/uploads/2018/05/new-banner6.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: "47vh" }}>
          <Image
            fluid
            src="https://papabubble.co.in/wp-content/uploads/2018/05/new-banner2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1 className="text-white  bg-danger font-weight-light py-5 px-3">
        Buy your <span className="text-warning">FAVORITE </span> candy online
      </h1>

      <Container>
        <p className="text-center  pl-5"></p>
      </Container>

      <div className="row">
        {products &&
          products.map((prod, inde) => (
            <div className="col-md-4" key={inde}>
              <Card prod={prod} />
            </div>
          ))}
      </div>
    </Base>
  );
};

export default Home;
