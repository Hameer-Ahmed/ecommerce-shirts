import React, { useState } from "react";
import { products } from "../../utils/productsData";
import "./card.css";
import Modal from "../Modal/Modal";
const Card = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="card">
        <div className="image">
          <img src={data.productImageLink} alt="" />
        </div>
        <div className="text">
          <h2>{data.productTitle}</h2>
          <p>{data.productPrice}</p>
        </div>
        <div className="btn">
          <button onClick={() => setShowModal(true)}>Click me!</button>
        </div>
      </div>
      {showModal && <Modal data={data} setShowModal={setShowModal} />}
    </div>
  );
};

export default Card;
