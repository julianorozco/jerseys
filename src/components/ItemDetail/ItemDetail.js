import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card d-flex">
          <p className="lead p-3">{item.title}</p>
          <div className="d-flex">
            <img src={item.pictureUrl} alt="..." />
            <div className="d-flex flex-column">
              <p className="lead p-3 font-weight-bold">$ {item.price}</p>
              <p className="lead p-3"> {item.description}</p>
            </div>
          </div>
          <ItemCount stock={5} initial={0} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;