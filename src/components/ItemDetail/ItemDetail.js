import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ pictureUrl, code, title, price, description, stock }) => {
  const [end, setEnd] = useState(null);
  function onAdd() {
    setEnd(".");
  }
  return (
    <>
      <section>
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="w-100 shadow mb-5 bg-white rounded"
                src={pictureUrl}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">Item:&nbsp;{code}</div>
              <h1 className="display-5 fw-bolder">{title}</h1>
              <div className="fs-5 mb-5">
                <span>$&nbsp;{price}</span>
              </div>
              <p>{description}</p>
              <div className="small mb-1">Stock:&nbsp;{stock}</div>
              {!end ? (
                <ItemCount stock={stock} initial={0} onAdd={onAdd} />
              ) : (
                <Link to={`/cart/`} className="text-decoration-none">
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-dark">Terminar compra</button>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
