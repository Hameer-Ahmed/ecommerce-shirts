import React, { useState } from "react";
import "./Modal.css";
const Modal = ({ data, setShowModal }) => {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className="Modal">
      <div className="modalContainer">
        <div className="dataContainer">
          <div className="image">
            <img src={data.productImageLink[imgIndex]} alt="" />
          </div>
          <div className="text">
            <h2>{data.productTitle}</h2>
            <p>{data.productPrice}</p>
            <div className="imageChoice">
              {data.productImageLink.map((img, index) => {
                return <img src={img} onClick={() => setImgIndex(index)} />;
              })}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          close modal
        </button>
      </div>
      ;
    </div>
  );
};

export default Modal;
