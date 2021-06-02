import React from "react";
import API from "../backend";

const Imghelper = ({ prod }) => {
  const imgurl = prod
    ? `${API}/product/photo/${prod._id}`
    : `https://picsum.photos/500/300?random=${Math.floor(Math.random() * 10)}`;
  return (
    <div className="rounded card-img-top  ">
      <img
        src={imgurl}
        alt={`photo` + Math.random()}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="rounded"
      />
    </div>
  );
};

export default Imghelper;
