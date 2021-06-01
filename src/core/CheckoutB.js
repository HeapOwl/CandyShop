import React, { useState, useEffect } from "react";
import DropIn from "braintree-web-drop-in-react";
import { Link } from "react-router-dom";

import { loadCart, emptyCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";
import { getToken, processPayment } from "./helper/paymentBhelper";
import { createOrder } from "./helper/orderHelper";

const CheckoutB = ({ products, setReload, reload }) => {
  const jwt = isAuthenticated();
  const { user, token } = jwt;
  const [info, setInfo] = useState({
    clientToken: null,
    success: false,
    error: false,
    loading: false,
    instance: {},
  });
  const gettoken = (uid, token) => {
    getToken(uid, token)
      .then((info) => {
        console.log("INFO:", info);

        if (info.error) {
          setInfo({ ...info, error: info.error });
        } else {
          setInfo({ clientToken: info.clientToken });
        }
      })
      .catch();
  };

  const webUI = () => {
    return (
      <div>
        {info.clientToken !== null && products.length > 0 ? (
          <div>
            <DropIn
              options={{ authorization: info.clientToken }}
              onInstance={(instance) => (info.instance = instance)}
            />
            <button
              className="btn btn-outline-danger btn-lg"
              onClick={onPurchase}
            >
              Buy
            </button>
          </div>
        ) : (
          <div className="p-5 m-5">
            <img
              src="imgs/lolli_icon.png"
              alt=""
              className="d-none d-lg-inline"
            />
          </div>
        )}
      </div>
    );
  };
  const onPurchase = () => {
    setInfo({ loading: true });
    let nonce;
    let getnonce = info.instance.requestPaymentMethod().then((data) => {
      nonce = data.nonce;
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: getAmount(),
      };
      processPayment(user.id, token, paymentData)
        .then((data) => {
          setInfo({ ...info, success: data.success, loading: false });
          const orderData = {
            products: products,
            transaction_id: data.transaction.id,
            amount: data.transaction.amount,
          };
          createOrder(user.id, token, orderData);
          emptyCart(() => {
            setReload(!reload);
          });
        })
        .catch((err) => {
          console.log("Payment failse", err);
          //TODO reload and empty cart
          setInfo({ ...info, success: false, error: err, loading: false });
        });
    });
  };

  const getAmount = () => {
    let am = 0;
    products.map((p) => {
      am += p.price;
    });
    return am;
  };
  useEffect(() => {
    gettoken(user.id, token);
  }, []);

  return (
    <div>
      {getAmount() && (
        <h3 className="text-center text-dark mt-2">
          Total Amount : {getAmount()} $
        </h3>
      )}
      {webUI()}
    </div>
  );
};

export default CheckoutB;
