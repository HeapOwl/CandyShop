import React, { useState } from "react";
import Imghelper from "./helper/Imghelper";
import { addToCart, removeItem } from "./helper/cartHelper";
import { Redirect } from "react-router-dom";

const Card = ({
  prod,
  addtocart = true,
  removefromcart = false,
  setReload,
  reload,
}) => {
  const [redirect, setRedirect] = useState(false);

  const additem = () => {
    addToCart(prod, () => {
      setRedirect(true);
    });
  };

  return redirect ? (
    <Redirect to="/cart" />
  ) : (
    <div className="card text-danger bg-light border border-danger text-center mx-2 my-2">
      <Imghelper prod={prod} />
      <div className="card-body px-0 py-1">
        <p className="lead bg-danger text-white font-weight-normal text-wrap ">
          {prod.name} <br />$ {prod.price}
        </p>
        <p className="lead bg-danger text-white  text-wrap"></p>

        <div className="row">
          <div className="col-12">
            <div className="d-grid gap-2">
              {addtocart && (
                <button
                  onClick={additem}
                  className="btn  btn-outline-danger m-2 "
                >
                  Add to Cart
                </button>
              )}
            </div>
            <div className="col-12">
              <div className="d-grid gap-2">
                {removefromcart && (
                  <button
                    onClick={() => {
                      removeItem(prod._id);
                      setReload(!reload);
                    }}
                    className="btn  btn-outline-danger mt-2 mb-2"
                  >
                    Remove from cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
