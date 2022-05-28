import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <>
      <section>
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="w-100 shadow mb-5 bg-white rounded"
                src={item.pictureUrl}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">Item:&nbsp;{item.id}</div>
              <h1 className="display-5 fw-bolder">{item.title}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">
                  ${item.price + 1000}
                </span>
                <span>&nbsp;${item.price}</span>
              </div>
              <p>{item.description}</p>
              <ItemCount stock={5} initial={0} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
