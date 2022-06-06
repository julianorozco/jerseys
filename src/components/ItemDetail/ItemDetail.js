import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ id, pictureUrl, code, title, price, description, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem, getProduct } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);

    addItem({ id, pictureUrl, title, price, quantity });
  };
  return (
    <>
      <section>
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="w-100 shadow mb-5 bg-white rounded" src={pictureUrl} alt="" />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">Item:&nbsp;{code}</div>
              <h1 className="display-5 fw-bolder">{title}</h1>
              <div className="fs-5 mb-5">
                <span>$&nbsp;{price}</span>
              </div>
              <p>{description}</p>
              <div className="small mb-1">Stock:&nbsp;{stock}</div>
              {quantity > 0 ? (
                <Link to="/cart" type="button" className="btn btn-dark">
                  Finalizar compra
                </Link>
              ) : (
                <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
