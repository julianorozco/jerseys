import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <Item product={product} />;
      })}
    </>
  );
};

export default ItemList;
