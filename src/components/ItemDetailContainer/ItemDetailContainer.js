import ItemDetail from "../ItemDetail/ItemDetail";
import { getItem } from "../../asyncmock";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [item, setItems] = useState([]);
  useEffect(() => {
    getItem().then((response) => {
      setItems(response);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <ItemDetail item={item} />
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
